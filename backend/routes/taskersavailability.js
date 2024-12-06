const express = require('express');
const TaskersAvailability = require('../models/TaskersAvailability');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { taskerId, date, fromHour, toHour } = req.body;
        const availability = new TaskersAvailability({
            taskerId,
            date,
            fromHour,
            toHour,
        });
        await availability.save();
        res.status(201).json({ message: 'Availability created successfully!', availability });
    } catch (error) {
        res.status(400).json({ message: 'Error creating availability', error });
    }
});

router.get('/:taskerId/:date', async (req, res) => {
    try {
        const { taskerId, date } = req.params;
        const availability = await TaskersAvailability.find({
            taskerId,
            date: new Date(date), 
        });
        if (!availability.length) {
            return res.status(404).json({ message: 'No availability found for this date' });
        }
        res.json({ availability });
    } catch (error) {
        res.status(400).json({ message: 'Error fetching availability', error });
    }
});

module.exports = router; 
