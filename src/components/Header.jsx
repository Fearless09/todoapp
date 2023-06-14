import React from 'react'

function Header({ onDisplayAddTask, autoClass, text }) {
    return (
        <div className='hstack justify-content-between'>
            <h3 className='m-0'>Todo</h3>
            <button className={`btn text-uppercase fw-semibold ${autoClass}`} onClick={onDisplayAddTask}>
                {text}
            </button>
        </div>
    )
}

export default Header
