import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css'

const Navbar=()=> {
    return (
        <nav>
            <div className='NavContainer'>
                <div className='NavLeft'>         
                    Bonus Points
                </div>
                <div className='NavRight'>
                    <Link to="/history">History</Link>
                </div>

            </div>
        </nav>
    )
}

export default Navbar;