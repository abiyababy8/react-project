import { React, useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    const [showDropDown, setShowDropDown] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropDown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="nav-bar d-flex justify-content-between">
                <div className='d-flex'>
                    <Link to={'/'}>
                        <i className="fa-solid fa-paw nav-bar-brand fa-beat m-1 fa-2x"></i>
                    </Link>

                    <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>
                        <h3 className='m-1'>PawConnect</h3>
                    </Link>
                </div>
                <div className="user-dropdown position-relative" ref={dropdownRef}>
                    <i 
                        className="fa-solid fa-user fa-2x" 
                        onClick={() => setShowDropDown(!showDropDown)}
                        style={{ cursor: 'pointer' }}
                    ></i>
                    {showDropDown && (
                        <div className="dropdown-menu-custom">
                            <Link to="/admin" className="dropdown-items">Admin</Link>
                            <Link to="/user-home" className="dropdown-items">User</Link>
                            <Link to="/login" className="dropdown-items">Log In</Link>
                            <Link to="/register" className="dropdown-items">Register</Link>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Nav;
