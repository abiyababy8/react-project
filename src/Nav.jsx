import React from 'react'
import './App.css'
function Nav() {
    return (
        <>
            <div className="nav-bar d-flex justify-content-between">
                <div className='d-flex'>
                <i class="fa-solid fa-paw nav-bar-brand fa-beat m-1 fa-2x"></i>
                <h3 className='m-1'>PawConnect</h3>
                </div>
                <i class="fa-solid fa-user fa-2x nav-link"></i>
            </div>
        </>
    )
}

export default Nav