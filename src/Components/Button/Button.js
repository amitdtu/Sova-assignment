import React from 'react'
import './Button.css'

export default function Button({children}) {
    return (
        <button className="btn mt-2">{children}</button>
    )
}
