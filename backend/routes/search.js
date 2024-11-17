const express = require('express');
const router = express.Router();
const Category = require('../models/Category');

// Search API Endpoint
router.get('/', async (req, res) => {
    const query = req.query.q || '';

    if (!query.trim()) {
        return res.json([]);
    }

    try {
        const results = await Category.find({ name: { $regex: query, $options: 'i' } }).limit(10);
        res.json(results);
    } catch (error) {
        console.error('Error fetching search results:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
