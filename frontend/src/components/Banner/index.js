import React from 'react'
import BGImage from '../BGImage'
import './_banner.scss'

function Banner({ size, url }) {
    return (
        <div className='banner'>
            <BGImage
                className='image'
                url={url}
                size={size}
            />
        </div>
    )
}

export default Banner
