import {React,useState} from 'react'
import './App.css'
function Nav() {
    const [showDropDown, setShowDropDown] = useState(false)
    return (
        <>
            <div className="nav-bar d-flex justify-content-between">
                <div className='d-flex'>
                    <i class="fa-solid fa-paw nav-bar-brand fa-beat m-1 fa-2x"></i>
                    <h3 className='m-1'>PawConnect</h3>
                </div>
                <div className="user-dropdown position-relative">
                <i class="fa-solid fa-user fa-2x nav-link" onClick={()=>setShowDropDown(!showDropDown)}></i>
                {showDropDown && (
                        <div className="dropdown-menu-custom">
                            <a href="/login" className="dropdown-item">Login</a>
                            <a href="/signup" className="dropdown-item">Sign Up</a>
                        </div>
                    )}
            </div>
        </div >
        </>
    )
}

export default Nav