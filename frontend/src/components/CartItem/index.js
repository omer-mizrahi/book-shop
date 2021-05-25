import React, { useState } from 'react'
import BGImage from '../BGImage'
import { useDispatch, useSelector } from 'react-redux';
import './_cartItem.scss'
import { MdCancel } from 'react-icons/md'
import { addToCart, removeFromCart } from '../../actions/cartActions';
import Card from '../Card';

function CartItem({ item }) {
    const { name, image, id, price } = item
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    const index = cartItems.findIndex(p => p.id === id)
    const currentItem = cartItems[index]
    const qtyNow = currentItem?.qty || 0


    const dispatch = useDispatch()

    const addToCartHandler = () => {
        dispatch(addToCart(id, qtyNow + 1))
    }

    const removeFromCartHandler = () => {
        dispatch(removeFromCart(id))
    }

    const decrementAmounFromCartHandler = () => {
        dispatch(addToCart(id, qtyNow - 1))
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <Card className='cartItem'>
                <div className='item'>
                    <div className='infoItem'>
                        <BGImage className='image' url={image} size={70} />
                        <div>
                            <h6>{name}</h6>
                            <span className='price'>₪{price?.toFixed(2)}</span>
                        </div>
                    </div>

                    <div className='btnsBox'>
                        <div className='btns' >
                            <span className='click' onClick={addToCartHandler}>+</span>
                            <span className='num'>{qtyNow}</span>
                            <span className='click' onClick={() => { qtyNow - 1 < 1 || qtyNow === 0 ? removeFromCartHandler() : decrementAmounFromCartHandler() }}>-</span>
                        </div>
                    </div>
                </div>

            </Card>
            <MdCancel className='cancelX' onClick={removeFromCartHandler} />
        </div>
    )
}

export default CartItem
