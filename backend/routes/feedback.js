const express = require('express');
const Feedback = require('../models/Feedback');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const feedbacks = await Feedback.find()
            .limit(6)
            .populate('feedback_customer') 
            .populate('feedback_product');

        res.json(feedbacks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

router.get('/:id', async (req, res) => {
    const feedback = await Feedback.findById(req.params.id);
    if (!feedback) return res.status(404).json({ message: 'Category not found' });
    res.json(feedback);
});

router.post('/', async (req, res) => {
    const feedback = new Feedback(req.body);
    await feedback.save();
    res.status(201).json(feedback);
});

router.delete('/:id', async (req, res) => {
    const feedback = await Feedback.findByIdAndDelete(req.params.id);
    if (!feedback) return res.status(404).json({ message: 'Feedback not found' });
    res.json({ message: 'Category deleted' });
});

module.exports = router;