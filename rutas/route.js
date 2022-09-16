const { getProducts, getProductRandom, getStartPage } = require('../controladores/controllers');
const { Router } = require('express');
const router = Router();

router.get('/', getStartPage);
router.get('/products', getProducts);
router.get('/productRandom', getProductRandom);

module.exports = router;