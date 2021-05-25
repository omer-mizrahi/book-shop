import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Form from '../Form'
import './_loginForm.scss'
import { login } from '../../actions/userActions'


function LoginForm({ setShow, show }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()


    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
        setShow(false)
        // window.location.reload()
    }
    return (
        <Form onSubmit={submitHandler}>
            <div className='loginForm'>
                <div className='sec'>
                    <label>אימייל</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} name='email' placeholder='הכנס אימייל' />
                </div>
                <div className='sec'>
                    <label>סיסמא</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} name='password' placeholder='הכנס סיסמא' />
                </div>
            </div>
        </Form>
    )
}

export default LoginForm
