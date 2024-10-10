import React from 'react';
import { Link } from 'react-scroll'

const Scroll = () => {
    return (
        <div>
            <Link to="Search" spy={true} smooth={true} offset={50} duration={500} className="box flex items-center">
            Search
            </Link>
            
        </div>
    );
};

export default Scroll;