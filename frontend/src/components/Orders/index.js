import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './_orders.scss'
import { getListOrders } from '../../actions/orderActions'
import Order from '../Order'

function Orders() {
    const listOrders = useSelector((state) => state.listOrders)
    const { orders } = listOrders
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getListOrders())
    }, [dispatch])

    return (
        <div className='orders'>
            {orders.map(order => (
                <Order
                    orderItems={order.orderItems}
                    totalPrice={order.totalPrice}
                    date={order.updatedAt}
                    user={order.user}
                />
            ))}
        </div>
    )
}

export default Orders
