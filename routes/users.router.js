const express = require('express');

const UsersService = require('./../services/users.service');

const service = new UsersService;

const router = express.Router();

router.get('/', (req, res) => {
  const users = service.find();
  res.json(users);
});


router.get('/:id', (req, res) => {
  const { id } = req.params;
  const user = service.findOne(id)
  res.json(user);
});


router.get('/:userId/categories/:categoryId/products/:productId', (req, res) => {
  const { userId, categoryId, productId } = req.params;
  res.json({
      userId,
      categoryId,
      productId
  })
})

module.exports = router
