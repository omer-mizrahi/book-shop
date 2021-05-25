import React from 'react'
// import style from './button.less'
import './_button.scss'

const Button = ({ className = '', children, onClick, circle, noMargin }) =>
    <button
        style={{ margin: noMargin ? 0 : '' }}
        aria-label={typeof children == 'string' ? children : ((children || {}).name || 'button')}
        className={`button ${className} ${circle ? 'circle' : ''}`}
        onClick={onClick}>
        {children}
    </button>

export default Button