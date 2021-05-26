const asyncHandler = require('express-async-handler')
const Order = require('../models/orderModel')

const getOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find({})
    res.json(orders)
})

const addOrderItems = asyncHandler(async (req, res) => {

    const { orderItems, totalPrice } = req.body

    if (orderItems && orderItems.length === 0) {
        res.status(400)
        throw new Error('No order items')
    } else {
        const order = new Order({
            orderItems,
            user: '60ae45c23b72cf10273fa10d',
            totalPrice
        })

        const createdOredr = await order.save()
        res.status(201).json(createdOredr)

    }
})

module.exports = { addOrderItems, getOrders }