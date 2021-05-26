import { useState } from 'react'
import { BsCaretDownFill } from 'react-icons/bs'
import './_dilema.scss'

const Dilema = ({ className = '', q, icon, onOk, onCancel }) => {
    const [open, setOpen] = useState()

    function close() {
        setOpen(false)
    }

    return <div className={`${className} dilema`} onClick={e => e.stopPropagation()}>
        <div onClick={() => setOpen(!open)}>{icon}</div>
        {open && <div className='bubble'>
            <h4>{q}</h4>
            <div className='btnsDilem'>
                <button onClick={e => {
                    if (typeof onOk == 'function') onOk()
                    close()
                }}>כן</button>
                <button onClick={e => {
                    if (typeof onCancel == 'function') onCancel()
                    close()
                }}>לא</button>
            </div>
            <BsCaretDownFill className='downIcon' />
        </div>}
    </div>
}

export default Dilema
