const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/', async (req, res) => {
  try {
    // find all categories and include their associated products
    const categories = await Category.findAll({ include: [Product] });
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    // find one category by its `id` value and include its associated products
    const category = await Category.findByPk(req.params.id, { include: [Product] });
    if (!category) {
      res.status(404).json({ message: 'No category found with this id' });
    } else {
      res.status(200).json(category);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    // create a new category
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    // update a category by its `id` value
    const category = await Category.findByPk(req.params.id);
    if (!category) {
      res.status(404).json({ message: 'No category found with this id' });
    } else {
      await category.update(req.body);
      res.status(200).json(category);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    // delete a category by its `id` value
    const category = await Category.findByPk(req.params.id);
    if (!category) {
      res.status(404).json({ message: 'No category found with this id' });
    } else {
      await category.destroy();
      res.status(204).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
