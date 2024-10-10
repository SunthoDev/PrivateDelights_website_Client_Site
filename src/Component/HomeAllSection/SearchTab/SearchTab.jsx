import React, { useState } from 'react';
import "./SearchTab.css";
import { Link } from 'react-router-dom';

const SearchTab = () => {

    return (
        <div className=" bg-white">
            <div id="Search" className="SearchTabParent pb-[228px]">

                <h2>Search</h2>

                <div className="TabsHeadParent bg-[#F5F5F5]">

                    <div className="TabsHead px-6 md:px-0 w-[100%] md:w-[690px] lg:w-[790px] mx-auto">

                        <h2 className="unikBorder w-[28%] md:w-[16%] text-[#4F6DF5]">
                            <Link to="/login">
                                <span className="text-[#4F6DF5] text-[19px] md:text-[24px]"><i class="fa fa-map-marker" aria-hidden="true"></i></span><br />
                                LOCATION
                            </Link>
                        </h2>

                        <h2 className="text-[#989898] hidden md:block">
                            <Link to="/login">
                                <span className="text-[#989898] text-[19px] md:text-[22px]"><i class="fa fa-keyboard-o" aria-hidden="true"></i></span><br />
                                KEYWORD
                            </Link>
                        </h2>
                        <h2 className="text-[#989898]">
                            <Link to="/login">
                                <span className="text-[#989898] text-[19px] md:text-[22px]"><i class="fa fa-user-circle" aria-hidden="true"></i></span><br />
                                USERNAME
                            </Link>
                        </h2>
                        <h2 className="text-[#989898] hidden md:block">
                            <Link to="/login">
                                <span className="text-[#989898] text-[19px] md:text-[22px]"><i class="fa fa-phone" aria-hidden="true"></i></span><br />
                                PHONE
                            </Link>
                        </h2>
                        <h2 className="text-[#989898]">
                            <Link to="/login">
                                <span className="text-[#989898] text-[19px] md:text-[22px]">@</span><br />
                                EMAIL
                            </Link>
                        </h2>


                    </div>

                </div>

                {/* ========== */}

                <div className=" px-7 md:px-0 ">
                    <div className="TabsBody w-[100%] lg:w-[900px] mx-auto">

                        <div className="TabsBoxOne md:flex gap-5">

                            <select className="  w-full ">
                                <option disabled selected>All Providers</option>
                                <option>Female Providers</option>
                                <option>TransSexual Providers</option>
                                <option>Male Providers</option>
                                <option>Couple Providers</option>
                            </select>
                            <select className="seect  w-full ">
                                <option disabled selected>Any Services</option>
                                <option>Escort</option>
                                <option>FBSM</option>
                                <option>BDSM</option>
                                <option>FBSM only</option>
                                <option>BDSM only</option>
                            </select>

                        </div>

                        <div className="TabsBoxTwo md:flex gap-5">

                            <select className="  w-full ">
                                <option disabled selected>USA</option>
                                <option>Canada</option>
                            </select>
                            <select className="  w-full " >
                                <option disabled selected>State</option>
                                <option>Alaska</option>
                                <option>Arizona</option>
                                <option>Arkanasas</option>
                                <option>California</option>
                                <option>Colorado</option>
                                <option>Connecticut</option>
                                <option>Delaware</option>
                                <option>Florida</option>
                                <option>Georgia</option>
                                <option>Hawaii</option>
                                <option>Idaho</option>
                                <option>LLinois</option>
                                <option>Insina</option>
                                <option>Lowa</option>
                                <option>Kanasa</option>
                                <option>Ketucky</option>
                                <option>Maine</option>
                                <option>Mayrland</option>
                                <option>Michigna</option>
                                <option>Minnesota</option>
                                <option></option>
                                <option>Neveda</option>
                                <option>Montona</option>
                                <option>New Jersey</option>
                                <option>New Mexico</option>
                            </select>

                        </div>

                        <div className="TabsBoxThree md:flex gap-5">

                            <input className="w-full" type="text" placeholder='City' />

                            <select className="seect  w-full ">
                                <option disabled selected>0 miles</option>
                                <option>5 miles</option>
                                <option>10 miles</option>
                                <option>15 miles</option>
                                <option>20 miles</option>
                                <option>25 miles</option>
                            </select>
                        </div>

                        <h4 className="text-[13px] font-[600] pt-[3px] text-left text-[#FF3860]">Select State First</h4>

                        {/* ========================== */}
                        <Link to="/login">
                            <button className="Search w-full md:w-[224px] mt-[24px] md:mt-[8px]">Search</button>
                        </Link>

                        <p className="SearchSetting mx-[74px] md:mx-[200px] mt-[24px] md:mt-[8px]">Search settings will be saved after <span> <Link to="/login">LOGIN</Link></span></p>
                        <Link to="/login">
                            <h6 className="ShowMoreFilters">Show More Filters</h6>
                        </Link>



                    </div>
                </div>

            </div>
        </div>
    );
};

export default SearchTab;
