import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './_profileScreen.scss'
import BGImage from '../../components/BGImage'
import Card from '../../components/Card'



function ProfileScreen({ history, match }) {
    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const { loading, error, user } = userDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    console.log('userDetails', userDetails)

    useEffect(() => {
        if (!userInfo) {
            history.push('/')
        } else {

        }

    }, [dispatch, history, userInfo])

    const submitHandler = (e) => {
        e.prevenDefault()
    }

    return (
        <div className='profileScreen'>
            <Card className='cardRight'>
                <div className='secTitle'>
                    <h3>פרופיל</h3>
                    <span>ערוך פרטים</span>
                </div>
                <hr />
                <div className='secInfo'>
                    <BGImage
                        className='image'
                        url='https://images.unsplash.com/photo-1468218457742-ee484fe2fe4c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2253&q=80'
                        size={120}
                    />
                    <h4>{userInfo.name}</h4>
                </div>
            </Card>
            <Card className='cardLeft'>
                <div className='secTitle'>
                    <h3>הזמנות</h3>
                    <span>=</span>
                </div>
                <hr />


            </Card>

        </div>
    )
}

export default ProfileScreen
