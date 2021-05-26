import React from 'react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import ProductsList from '../../components/ProductsList'
import './_homeScreen.scss'
import BookingImag from '../../photos/man reading.png'

function HomeScreen() {
    return (
        <div className='home'>
            <Card className='cardBanner'>
                <div>
                    <h2>הגיע הזמן להתחיל לקרוא</h2>
                    <span>קריאת ספרים משפרת את האינטליגנציה שלך</span>
                    <Button>ראה הכל</Button>
                </div>
                <img src={BookingImag} alt='banner' />
            </Card>
            <ProductsList />
        </div>
    )
}

export default HomeScreen
