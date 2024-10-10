import React from 'react';
import "./Footer.css"
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=" bg-[#F5F5F5]">

            <div className="ParentFooter w-full md:w-[790px] mx-auto md:flex justify-between items-center">

                <Link to="/login"><h4 className="hidden md:block">Contact <br /> PrivateDelights</h4></Link>
                <Link to="/login"><h4 className="md:hidden">Contact PrivateDelights</h4></Link>
                <Link to="/login"><h4>Blog</h4></Link>
                <Link to="/login"><h4>Twitter</h4></Link>
                <Link to="/login"><h4>Locations</h4></Link>
                <Link to="/login"><h4>Privacy Policy</h4></Link>
                <Link to="/login"><h4>Terms</h4></Link>
            </div>

            <Link to="/login"> <h6 className="Coperight">© 2024 PrivateDelights.ch</h6></Link>

        </div>
    );
};

export default Footer;