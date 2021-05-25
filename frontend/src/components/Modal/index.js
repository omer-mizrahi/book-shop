import React from 'react'
import './_modal.scss'
import { MdCancel } from 'react-icons/md'

function Modal({ children, status, title, show, setShow }) {

    const close = () => {
        setShow(false)
    }
    return (
        show ? <div className='modal'>
            <div className='overlay' onClick={close}></div>
            <div className='content'>
                <h2 className>{title}</h2>
                <MdCancel className='close' onClick={close} />
                <div >{children}</div>
            </div>

        </div> : null
    );
}

export default Modal