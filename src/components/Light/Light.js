import React, { useState } from 'react'
import './Light.css'

const Light = () => {
    const [status, setStatus] = useState(0)
    const handleOn = () => {
        setStatus(1)
    }
    const handleOff = () => {
        setStatus(0)
    }
    return (
        <div className="light-container">
            <div className={status ? 'light-on' : 'light-off'}></div>
            <button onClick={handleOn}>On</button>
            <button onClick={handleOff}>Off</button>
        </div>
    )
}

export default Light
