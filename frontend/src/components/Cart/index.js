import React, { useEffect, useState } from 'react'
import './_cart.scss'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../CartItem'
import Card from '../Card'
import { FiTrash } from 'react-icons/fi'
import { FcApproval } from 'react-icons/fc'
import Button from '../Button'
import { cleanCart } from '../../actions/cartActions'

function Cart({ className = '', cartOpen, history }) {
    const dispatch = useDispatch()
    const [sum, setSum] = useState(0)

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const [needLogin, setNeedLogin] = useState()
    const [haveOrder, setHaveOrder] = useState(false)

    function calcCartSum() {
        const res = cartItems.reduce((acc, item) => (acc + ((item.price) * item.qty)), 0)
        setSum(res)
        return res
    }

    const submitPay = () => {
        if (!userInfo) {
            setNeedLogin(true)

        } else {
            setNeedLogin(false)
            setHaveOrder(true)

            setTimeout(() => {
                window.location.reload()
            }, 2000)
        }
    }
    const cleanCarnHandler = () => {
        dispatch(cleanCart())
    }

    useEffect(() => {
        calcCartSum()
    }, [cartItems, calcCartSum])



    return (

        <Card className={`cart ${cartOpen ? 'cartOpen' : ''}`}>
            <div className='first'>
                <h2>{cartItems.length > 0 ? 'העגלה שלי' : 'העגלה שלך ריקה'}</h2>
                {cartItems.length > 0 && <FiTrash onClick={cleanCarnHandler} />}
            </div>
            <div className='listItems'>
                {cartItems.map(item => (
                    <CartItem key={item._id} item={item} />
                ))}
            </div>

            {  cartItems.length > 0 &&
                <>
                    <div className='finish'>
                        <div className='sum'>
                            <h3>סה״כ:</h3>
                            <span>₪{sum.toFixed(2)}</span>
                        </div>
                        <Button onClick={submitPay}>אישור ותשלום</Button>
                    </div>
                    <div className='needLogin'>{needLogin ? '*יש להתחבר לפני ביצוע הזמנה*' : ''}</div>

                    {haveOrder && <div className='haveOrder'>
                        <h3>תשלום בוצע!</h3>
                        <FcApproval />
                    </div>}
                </>
            }

        </Card>
    )
}

export default Cart
