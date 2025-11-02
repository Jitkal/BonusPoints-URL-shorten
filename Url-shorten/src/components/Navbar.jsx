import React from 'react';
import '../styles/Nav.css'

const Navbar=()=> {
    return (
        <nav>
            <div className='NavContainer'>
                <div className='NavLeft'>         
                    Bonus Points
                </div>

                <div className='NavRight'>
                    History
                </div>

            </div>
        </nav>
    )
}

export default Navbar;