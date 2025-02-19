const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
      res.json({
          limit,
          offset
      });
  } else {
      res.send('No hay parametros');
  }
})


router.get('/:userId/categories/:categoryId/products/:productId', (req, res) => {
  const { userId, categoryId, productId } = req.params;
  res.json({
      userId,
      categoryId,
      productId
  })
})

module.exports = router
