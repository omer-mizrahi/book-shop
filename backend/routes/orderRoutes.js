const express = require('express')
const router = express.Router()
const { addOrderItems, getOrders } = require('../controllers/orderController')
// import { protect } from '../middleware/authMiddleware.js'


router.route('/').get(getOrders)
router.route('/').post(addOrderItems)


module.exports = router