const {getAllProducts, addNewProduct, deleteProduct, getProductById, updateProduct } = require('../controladores/controllers');
const { Router } = require('express');
const router = Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', addNewProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;