import React from 'react'
import './Button.css'

export default function Button({children, ...props}) {
    return (
        <button {...props} className="btn mt-2">{children}</button>
    )
}
