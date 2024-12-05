const express = require('express');
const Tasker = require('../models/Taskers');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const taskers = await Tasker.find();

        res.json(taskers);
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