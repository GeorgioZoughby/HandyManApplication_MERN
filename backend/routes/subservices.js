const express = require('express');
const SubService = require('../models/SubService');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const subservices = await SubService.find();
        res.json(subservices);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/by-service/:serviceId', async (req, res) => {
    try {
        const subservices = await SubService.find({ service: req.params.serviceId });
        if (subservices.length === 0) {
            return res.status(404).json({ message: 'No subservices found for this service' });
        }
        res.json(subservices);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const subservice = await SubService.findById(req.params.id);
        if (!subservice) return res.status(404).json({ message: 'SubService not found' });
        res.json(subservice);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const subservice = new SubService(req.body);
        await subservice.save();
        res.status(201).json(subservice);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const subservice = await SubService.findByIdAndDelete(req.params.id);
        if (!subservice) return res.status(404).json({ message: 'SubService not found' });
        res.json({ message: 'SubService deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
