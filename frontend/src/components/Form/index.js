import React from 'react'

function Form({ children, submitText = 'שליחה', onSubmit, noSubmit }) {
    return (
        <form onSubmit={onSubmit}>
            {children}
            {noSubmit ? null : <input type='submit' value={submitText} />}
        </form>
    )
}

export default Form
