const express = require('express');
const ServiceCard = require('../models/ServiceCard');

const router = express.Router();

router.get('/', async (req, res) => {
    const servicecards = await ServiceCard.find()
        .populate('service_card_id');
    res.json(servicecards);
});

router.get('/:id', async (req, res) => {
    const servicecard = await ServiceCard.findById(req.params.id);
    if (!servicecard) return res.status(404).json({ message: 'Service Card not found' });
    res.json(servicecard);
});

router.post('/', async (req, res) => {
    const servicecard = new ServiceCard(req.body);
    await servicecard.save();
    res.status(201).json(servicecard);
});
router.delete('/:id', async (req, res) => {
    const servicecard = await ServiceCard.findByIdAndDelete(req.params.id);
    if (!servicecard) return res.status(404).json({ message: 'Service Card not found' });
    res.json({ message: 'Service Card deleted' });
});

module.exports = router;