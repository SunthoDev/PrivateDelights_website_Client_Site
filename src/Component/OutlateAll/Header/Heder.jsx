import React from 'react';
import "./Header.css"
import { Link } from 'react-router-dom';
// import { Link } from 'react-scroll'
import Scroll from '../Scroll/Scroll';
import { IoLocationSharp } from "react-icons/io5";
import { GrSearch } from "react-icons/gr";



const Heder = () => {

    return (
        <div className="navbarParent px-[18px] md:px-[20px] bg-white ">

            <div className="navbar flex items-center justify-between ">

                <Link to="/" className="Left">
                    <h2>PrivateDelights</h2>
                </Link>

                <div className="Right flex items-center">

                    <div className="SubMenuParent">
                        <div className="box flex items-center">
                            {/* <span><i className="fa fa-map-marker" aria-hidden="true"></i></span> */}
                            <span className="text-[22px]"><IoLocationSharp /></span>

                            <h3 className="hidden md:block">Location</h3>
                        </div>

                        <div className="SubMenu md:flex items-center justify-between -[100%] md:w-[1080px]">

                            <div className="SMenu">
                                <h4><Link to="/login">Atlanta, Georgia </Link></h4>
                                <h4><Link to="/login">Jacksonville, Florida </Link></h4>
                                <h4><Link to="/login">Pittsburgh, Pennsylvania </Link></h4>
                                <h4><Link to="/login">Austin, Texas </Link></h4>
                                <h4><Link to="/login">Kansas City, Missouri </Link></h4>
                                <h4><Link to="/login">Portland, Oregon </Link></h4>
                                <h4><Link to="/login">Baltimore, Maryland </Link></h4>
                                <h4><Link to="/login">Las Vegas, Nevada </Link></h4>
                                <h4><Link to="/login">Raleigh, North Carolina </Link></h4>
                                <h4><Link to="/login">Boston, Massachusetts </Link></h4>
                                <h4><Link to="/login">Los Angeles, California </Link></h4>
                                <h4><Link to="/login">Reno, Nevada </Link></h4>
                                <h4><Link to="/login">Central Valley, California </Link></h4>
                                <h4><Link to="/login">Louisville, Kentucky </Link></h4>
                                <h4><Link to="/login">Richmond, Virginia </Link></h4>
                                <h4><Link to="/login">Charlotte, North Carolina </Link></h4>
                                <h4><Link to="/login">Memphis, Tennessee </Link></h4>
                            </div>
                            <div className="SMenu">
                                <h4><Link to="/login">Sacramento, California </Link></h4>
                                <h4><Link to="/login">Chicago, Illinois </Link></h4>
                                <h4><Link to="/login">Miami, Florida </Link></h4>
                                <h4><Link to="/login">San Antonio, Texas </Link></h4>
                                <h4><Link to="/login">Cleveland, Ohio </Link></h4>
                                <h4><Link to="/login">Minneapolis, Minnesota </Link></h4>
                                <h4><Link to="/login">Salt Lake City, Utah </Link></h4>
                                <h4><Link to="/login">Columbus, Ohio </Link></h4>
                                <h4><Link to="/login">Nashville, Tennessee </Link></h4>
                                <h4><Link to="/login">San Diego, California </Link></h4>
                                <h4><Link to="/login">Dallas, Texas </Link></h4>
                                <h4><Link to="/login">New Orleans, Louisiana </Link></h4>
                                <h4><Link to="/login">San Fernando Valley, California </Link></h4>
                                <h4><Link to="/login">Denver, Colorado </Link></h4>
                                <h4><Link to="/login">New York City, New York </Link></h4>
                                <h4><Link to="/login">San Francisco, California </Link></h4>
                                <h4><Link to="/login">Detroit, Michigan </Link></h4>
                            </div>
                            <div className="SMenu">
                                <h4><Link to="/login">North Bay Area, California </Link></h4>
                                <h4><Link to="/login">San Jose, California </Link></h4>
                                <h4><Link to="/login">East Bay Area, California </Link></h4>
                                <h4><Link to="/login">Oklahoma City, Oklahoma </Link></h4>
                                <h4><Link to="/login">Seattle, Washington </Link></h4>
                                <h4><Link to="/login">Fresno, California </Link></h4>
                                <h4><Link to="/login">Orange County, California </Link></h4>
                                <h4><Link to="/login">South Bay Area, California </Link></h4>
                                <h4><Link to="/login">Houston, Texas </Link></h4>
                                <h4><Link to="/login">Orlando, Florida </Link></h4>
                                <h4><Link to="/login">Tampa, Florida </Link></h4>
                                <h4><Link to="/login">Indianapolis, Indiana </Link></h4>
                                <h4><Link to="/login">Philadelphia, Pennsylvania </Link></h4>
                                <h4><Link to="/login">Virginia Beach, Virginia </Link></h4>
                                <h4><Link to="/login">Inland Empire, California </Link></h4>
                                <h4><Link to="/login">Phoenix, Arizona </Link></h4>
                                <h4><Link to="/login">Washington DC, Washington DC </Link></h4>
                            </div>

                        </div>

                    </div>

                    <div className="box flex items-center">
                        {/* <span><i className="fa fa-search" aria-hidden="true"></i></span> */}
                        <span className="text-[18px]"><GrSearch /></span>
                        <h3 className="hidden md:block"> <Scroll></Scroll>  </h3>
                    </div>

                    <Link to="/login" className="box flex items-center">
                        <span className="text-[20px]"><i className="fa fa-user-circle" aria-hidden="true"></i></span>
                        <h3 className="hidden md:block">Login</h3>
                    </Link>

                </div>


            </div>

        </div>
    );
};

export default Heder;


