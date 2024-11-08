const express = require('express');
const User = require('../models/Booking');

const router = express.Router();

router.get('/', async (req, res) => {
  const bookings = await Booking.find().populate('customer handyman service');
  res.json(bookings);
});

router.get('/:id', async (req, res) => {
  const booking = await Booking.findById(req.params.id).populate('customer handyman service');
  if (!booking) return res.status(404).json({ message: 'Booking not found' });
  res.json(booking);
});

router.post('/', async (req, res) => {
  const booking = new Booking(req.body);
  await booking.save();
  res.status(201).json(booking);
});

router.delete('/:id', async (req, res) => {
  const booking = await Booking.findByIdAndDelete(req.params.id);
  if (!booking) return res.status(404).json({ message: 'Booking not found' });
  res.json({ message: 'Booking deleted' });
});

module.exports = router;
