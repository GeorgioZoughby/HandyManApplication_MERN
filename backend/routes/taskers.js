const express = require('express');
const Tasker = require('../models/Taskers');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const taskers = await Tasker.find()
            .populate('services.serviceId')
        ;

        res.json(taskers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});



router.get('/by-filters', async (req, res) => {
    try {
        const { nationalities, genders, serviceId, minPrice, maxPrice, page = 1, limit = 5 } = req.query;

        if (!serviceId) {
            return res.status(400).json({ message: 'Service ID is required' });
        }

        let query = { "services.serviceId": serviceId };

        if (minPrice && maxPrice) {
            query["services.price"] = { $gte: parseInt(minPrice), $lte: parseInt(maxPrice) };
        }

        if (nationalities) {
            const nationalityFilter = nationalities.split(',');
            if (!nationalityFilter.includes('lebanese') || !nationalityFilter.includes('international')) {
                query.nationality = nationalityFilter.includes('lebanese') ? 'Lebanon' : { $ne: 'Lebanon' };
            }
        }

        if (genders) {
            const genderArray = genders.split(',');
            if (!genderArray.includes('male') || !genderArray.includes('female')) {
                query.gender = genderArray.includes('male') ? 'Male' : 'Female';
            }
        }

        const totalCount = await Tasker.countDocuments(query);
        const pageCount = Math.ceil(totalCount / limit);

        const taskers = await Tasker.find(query)
            .skip((page - 1) * limit)
            .limit(parseInt(limit));

        res.json({ taskers, pageCount });
    } catch (error) {
        console.error("Error fetching taskers by filters:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/by-subservice/:subserviceID', async (req, res) => {
    try {
        const { page = 1, limit = 5 } = req.query;
        const subserviceID = req.params.subserviceID;

        const totalCount = await Tasker.countDocuments({ services: { $elemMatch: { serviceId: subserviceID } } });
        const pageCount = Math.ceil(totalCount / limit);

        const taskers = await Tasker.find({ services: { $elemMatch: { serviceId: subserviceID } } })
            .skip((page - 1) * limit)
            .limit(parseInt(limit));

        res.json({ taskers, pageCount });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});


router.get('/by-subservice/:subserviceID', async (req, res) => {
    try {
        const subserviceID = req.params.subserviceID;

        const taskers = await Tasker.find({
            services: { $elemMatch: { serviceId: subserviceID } }
        });

        const updatedTaskers = taskers.map(tasker => {
            tasker.services = tasker.services.filter(service => service.serviceId.toString() === subserviceID);
            return tasker;
        });

        res.json(updatedTaskers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

router.get('/:id', async (req, res) => {
    const tasker = await Tasker.findById(req.params.id);
    if (!tasker) return res.status(404).json({ message: 'Tasker not found' });
    res.json(tasker);
});

router.post('/', async (req, res) => {
    const tasker = new Tasker(req.body);
    await tasker.save();
    res.status(201).json(tasker);
});

router.delete('/:id', async (req, res) => {
    const tasker = await Tasker.findByIdAndDelete(req.params.id);
    if (!tasker) return res.status(404).json({ message: 'Tasker not found' });
    res.json({ message: 'Category deleted' });
});

module.exports = router;