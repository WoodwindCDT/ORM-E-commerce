const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // To find all categories
  Category.findAll({
    // To include its associated Products
    include: [
      {
        model: Product
      }
    ]
  }).then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  // To find one category by its `id` value
  Category.findOne({
    where: {
      id: req.params.id
    },
    // To include its associated Products
    include: [
      {
        model: Product
      }
    ]
  }).then(dbCategoryData => {
    if (!dbCategoryData) {
      res.status(404).json({ message: 'No Category found with this id' });
      return;
    }
    res.json(dbCategoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  console.log(req.body)
  // To create a new category
  Category.create({
    category_name: req.body.category_name
  }).then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
  // To update a category by its `id` value
  Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id
      }
    }).then(dbCategoryData => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'No Category found with this id' });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  // To delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then(dbCategoryData => {
    if (!dbCategoryData) {
      res.status(404).json({ message: 'No Category found with this id' });
      return;
    }
    res.json(dbCategoryData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
});
});

module.exports = router;