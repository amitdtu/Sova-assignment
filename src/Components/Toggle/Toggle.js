import React from 'react'
import './Toggle.css'

export default function Toggle({toggleChangeHandler, isChecked}) {
    return (
        <>
        <input type="checkbox" id="sdf" onChange={toggleChangeHandler} checked={isChecked} />
        <label htmlFor="sdf">
            <span></span>
        </label>
        </>
    )
}
