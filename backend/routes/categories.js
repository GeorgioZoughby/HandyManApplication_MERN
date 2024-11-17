const express = require('express');
const Category = require('../models/Category');

const router = express.Router();

router.get('/', async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
});

router.get('/:id', async (req, res) => {
  const category = await Category.findById(req.params.id);
  if (!category) return res.status(404).json({ message: 'Category not found' });
  res.json(category);
});

router.post('/', async (req, res) => {
  const category = new Category(req.body);
  await category.save();
  res.status(201).json(category);
});

router.delete('/:id', async (req, res) => {
  const category = await Category.findByIdAndDelete(req.params.id);
  if (!category) return res.status(404).json({ message: 'Category not found' });
  res.json({ message: 'Category deleted' });
});

module.exports = router;