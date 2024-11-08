const express = require('express');
const User = require('../models/Review');

const router = express.Router();

router.get('/', async (req, res) => {
  const reviews = await Review.find().populate('customer handyman booking');
  res.json(reviews);
});

router.get('/:id', async (req, res) => {
  const review = await Review.findById(req.params.id).populate('customer handyman booking');
  if (!review) return res.status(404).json({ message: 'Review not found' });
  res.json(review);
});

router.post('/', async (req, res) => {
  const review = new Review(req.body);
  await review.save();
  res.status(201).json(review);
});

router.delete('/:id', async (req, res) => {
  const review = await Review.findByIdAndDelete(req.params.id);
  if (!review) return res.status(404).json({ message: 'Review not found' });
  res.json({ message: 'Review deleted' });
});

module.exports = router;
