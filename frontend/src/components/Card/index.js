import React from 'react'
import './_card.scss'

function Card({ className = '', children, title, }) {
    return (
        <div className={`card ${className}`}>
            {title ? <h3>{title}</h3> : null}
            {children}
        </div>
    )
}

export default Card



// const Card = ({ title, className = '', children, bigShadow, style, onClick, id, btns }) =>
//     <div className={`${className} ${_style.card} ${bigShadow ? _style.bigShadow : ''}`} style={style} onClick={onClick} id={id}>
//         {title ? <h3 className={_style.h3}>{title}</h3> : null}
//         {children}
//         {btns ? <div className={_style.btns} onClick={e => e.stopPropagation()}>
//             {btns.map(b =>
//                 <a key={b.text} href={b.href} target='_blank' onClick={b.onClick} className={b.className}>
//                     {b.icon}
//                     <span>{b.text}</span>
//                 </a>
//             )}
//         </div> : null}
//     </div>

// export default Card