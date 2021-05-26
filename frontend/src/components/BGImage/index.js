
import React from 'react'
import './_bGImage.scss'

const BGImage = ({ className = '', children, url = '', gradient = '', size, circle }) => {

    if (typeof url == 'string' && url.startsWith('/'))
        url = `${url}`

    return <div className={`bGImage ${className} ${circle ? 'circle' : ''}`} style={{
        width: size,
        height: size,
        backgroundImage: `url(${url})${gradient ? `, ${gradient}` : ''}`
    }}>
        {children}
    </div>
}

export default BGImage
