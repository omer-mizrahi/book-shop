import React from 'react'
import './_message.scss'

function Message({ children, ok }) {
    return (
        <div style={{ color: ok ? 'green' : 'red' }} className='Message'>
            {children}
        </div>
    )
}

export default Message
