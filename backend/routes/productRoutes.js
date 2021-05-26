const express = require('express')
const router = express.Router()
const { getProducts, getProductById, updateProduct, deleteProduct, createProduct } = require('../controllers/productController')

router.route('/').get(getProducts)
router.route('/').post(createProduct)
router.route('/:id').get(getProductById)
router.route('/:id').patch(updateProduct)
router.route('/:id').delete(deleteProduct)

module.exports = router