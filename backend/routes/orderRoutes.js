import express from 'express'
const router = express.Router()
import { addOrderItems, getOrders } from '../controllers/orderController.js'
// import { protect } from '../middleware/authMiddleware.js'


router.route('/').get(getOrders)
router.route('/').post(addOrderItems)


export default router