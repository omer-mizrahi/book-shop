import React from 'react'
// import style from './loader.less'
import './_loader.scss'

const Loader = ({ className = '', size }) =>
    <div
        className={`loader ${className}`}
        style={size && { width: size, height: size, top: .5 * size }}
    />

export default Loader
