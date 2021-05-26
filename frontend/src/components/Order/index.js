import React from 'react'
import Card from '../Card'
import './_order.scss'
import OrderItem from '../OrderItem'

function Order({ orderItems, totalPrice, date }) {
    return (
        <Card className='order'>
            <div className='listItems'>
                {orderItems.map(item => <OrderItem
                    key={item._id}
                    name={item.name}
                    image={item.image}
                    price={item.price}
                    qty={item.qty}
                />)}
            </div>

            <div className='sumOrder'>
                <h4>₪{totalPrice.toFixed(2)}</h4>
                <span>{new Date(date).toLocaleDateString()}</span>
            </div>
        </Card>
    )
}

export default Order
