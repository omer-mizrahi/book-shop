import React from 'react'
import { useSelector } from 'react-redux'
import './_profileScreen.scss'
import BGImage from '../../components/BGImage'
import Card from '../../components/Card'
import Orders from '../../components/Orders'

function ProfileScreen() {
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

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
                        url={userInfo?.image}
                        size={120}
                    />
                    <h4>{userInfo.name}</h4>
                    <h6>{userInfo.email}</h6>
                </div>
            </Card>
            <Card className='cardLeft'>
                <div className='secTitle'>
                    <h3>הזמנות</h3>
                    <span>=</span>
                </div>
                <hr />
                <Orders />
            </Card>

        </div>
    )
}

export default ProfileScreen
