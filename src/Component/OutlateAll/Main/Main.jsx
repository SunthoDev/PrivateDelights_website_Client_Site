import React from 'react';
import "./Main.css"
import Heder from '../Header/Heder';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Main = () => {
    return (
        <div>
            <Link to="/login">
            <button className="HELPButton hidden md:block">HELP/FEEDBACK</button>
            </Link>
            <Heder></Heder>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;