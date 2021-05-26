import React, { useState } from 'react'
import './_header.scss'
import { Link } from 'react-router-dom'
import { BsFillPersonFill } from 'react-icons/bs'
import { IoCart } from 'react-icons/io5'
import Cart from '../../components/Cart'
import Modal from '../../components/Modal'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../actions/userActions'
import LoginForm from '../../components/LoginForm'
import Card from '../../components/Card'

function Header() {
    const [cartOpen, setCartOpen] = useState(false)
    const [show, setShow] = useState(false)
    const [showLinkUser, setShowLinkUser] = useState(false)

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const Admin = userInfo?.isAdmin

    const logoutHandler = (e) => {
        e.stopPropagation()
        dispatch(logout())
    }

    return (
        <header className='header'>
            <Modal setShow={setShow} show={show} title='כניסת מנהל'>
                <LoginForm setShow={setShow} show={show} />
            </Modal>
            <div className='right'>
                <div className='user'>
                    <div
                        style={{ background: userInfo ? '#352f82' : '' }}
                        className='userBtn'
                        onClick={() => { !userInfo ? setShow(!show) : setShowLinkUser(!showLinkUser) }}
                    >{userInfo ? <h4>{userInfo.name.charAt(0)} </h4> : <BsFillPersonFill />}
                        {showLinkUser && <Card className='userLinks'>
                            <ul>
                                {!Admin && <Link to={`/profile/${userInfo?._id}`}> <li>הצג פרופיל</li></Link>}
                                <Link to='/'><li onClick={logoutHandler}>התנתק</li></Link>
                                {Admin && <h6 className='noteAdmin'>מנהל יקר, הינך יכול לערוך מוצרים בדף זה</h6>}
                            </ul>
                        </Card>}
                    </div>
                </div>

                {Admin ? '' : <div className='headerCart'>
                    <div className='linkNav' onClick={() => setCartOpen(!cartOpen)}><IoCart /></div>
                    <Cart cartOpen={cartOpen} />
                </div>}
            </div>

            <Link to='/'>
                <h1>BookShop</h1>
            </Link>


        </header>
    )
}

export default Header
