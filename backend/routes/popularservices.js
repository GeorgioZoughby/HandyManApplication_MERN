const express = require('express');
const PopularService = require('../models/PopularServices');

const router = express.Router();

router.get('/', async (req, res) => {
    const PopularServices = await PopularService.find();
    res.json(PopularServices);
});

router.get('/:id', async (req, res) => {
    const popularservice = await PopularService.findById(req.params.id);
    if (!popularservice) return res.status(404).json({ message: 'Popular Service not found' });
    res.json(popularservice);
});

router.post('/', async (req, res) => {
    const popularservice = new PopularService(req.body);
    await popularservice.save();
    res.status(201).json(popularservice);
});
router.delete('/:id', async (req, res) => {
    const popularservice = await PopularService.findByIdAndDelete(req.params.id);
    if (!popularservice) return res.status(404).json({ message: 'Popular Service not found' });
    res.json({ message: 'Popular Service deleted' });
});

module.exports = router;