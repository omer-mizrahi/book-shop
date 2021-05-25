import express from 'express'
const router = express.Router()
import { getProducts, getProductById, updateProduct, deleteProduct, createProduct } from '../controllers/productController.js'

router.route('/').get(getProducts)
router.route('/').post(createProduct)
router.route('/:id').get(getProductById)
router.route('/:id').patch(updateProduct)
router.route('/:id').delete(deleteProduct)

export default router