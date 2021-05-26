import React, { useState } from 'react'
import './_product.scss'
import BGImage from '../BGImage'
import { addToCart } from '../../actions/cartActions'
import { useDispatch, useSelector } from 'react-redux'
import { MdAddShoppingCart } from 'react-icons/md'
import { GrEdit } from 'react-icons/gr'
import Modal from '../Modal'
import EditProduct from '../EditProduct'


function Product({ name, image, price, id, onSale, ahutor, product = {} }) {

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    const index = cartItems.findIndex(p => p.id === id)
    const currentItem = cartItems[index]
    const qtyNow = currentItem?.qty || 0

    const [show, setShow] = useState(false)

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()

    const addToCartHandler = () => {
        dispatch(addToCart(id, qtyNow + 1))
    }

    return (
        <div className={`product ${userInfo?.isAdmin ? 'editMode' : ''}`}>
            <Modal setShow={setShow} show={show} title='עריכת מוצר'>
                <EditProduct item={product} setShow={setShow} show={show} />
            </Modal>
            <BGImage className='image' url={image} size={200} />
            <h4>{name}</h4>
            <div className='pInfo'>
                <h6>{ahutor}</h6>
                <span className='price'>₪{price.toFixed(2)}</span>
            </div>
            <div>
                {!userInfo?.isAdmin ? <span className='add' onClick={addToCartHandler}><MdAddShoppingCart />
                    <span className={`${qtyNow ? 'qty' : ''} `}>{!qtyNow < 1 && qtyNow}</span>
                </span> :
                    <span className='add' onClick={() => setShow(!show)}><GrEdit /></span>
                }
            </div>

        </div>
    )
}

export default Product
