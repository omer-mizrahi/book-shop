import React from 'react'
import './__orderItem.scss'

function OrderItem({ name, image, price, qty, id }) {
    return (
        <div className='orderItem'>
            <img src={image} alt='itemImage' />
            <div>
                <h4>{name}</h4>
                <h6>₪{price.toFixed(2)}</h6>
                <div className='amount'>כמות: {qty}</div>
            </div>
        </div>
    )
}

export default OrderItem
