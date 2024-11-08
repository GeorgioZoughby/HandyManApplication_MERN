const express = require('express');
const User = require('../models/Service');

const router = express.Router();

router.get('/', async (req, res) => {
  const services = await Service.find();
  res.json(services);
});

router.get('/:id', async (req, res) => {
  const service = await Service.findById(req.params.id);
  if (!service) return res.status(404).json({ message: 'Service not found' });
  res.json(service);
});

router.post('/', async (req, res) => {
  const service = new Service(req.body);
  await service.save();
  res.status(201).json(service);
});

router.delete('/:id', async (req, res) => {
  const service = await Service.findByIdAndDelete(req.params.id);
  if (!service) return res.status(404).json({ message: 'Service not found' });
  res.json({ message: 'Service deleted' });
});

module.exports = router;