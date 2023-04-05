import React from 'react';
import './Header.css'

import { faArrowTurnUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    return (
        <nav className='nav'>
            <div className='nav-info'>
                <p className='nav-icon'><FontAwesomeIcon icon={faArrowTurnUp}></FontAwesomeIcon></p>
                <p className='nav-title'>Digital Art</p>
            </div>
        </nav>
    );
};

export default Header;