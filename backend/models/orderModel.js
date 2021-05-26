const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    user: { type: String, required: true },

    orderItems: [
        {
            name: { type: String, required: true },
            qty: { type: Number, required: true },
            image: { type: String, required: true },
            price: { type: Number, required: true },
        }
    ],
    totalPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    paidAt: {
        type: Date,
    },
}, {

    timestamps: true
}
)

const Order = mongoose.model('Order', orderSchema)

// export default Order
module.exports = Order