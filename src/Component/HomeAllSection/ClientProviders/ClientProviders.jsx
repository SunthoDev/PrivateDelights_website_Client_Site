import React from 'react';
import "./ClientProviders.css"
import { Link } from 'react-router-dom';


const ClientProviders = () => {
    return (
        <div className="ClientProvidersParent pt-[134px] bg-white">

            {/* <div className=" w-[100%] sm:w-[680px]  md:w-[790px] lg:w-[1120px] mx-auto"> */}
            {/* <div className="kk w-[100%]  md:px-[36px] lg:w-[1156px] mx-auto"> */}
            <div className=" w-[100%]  md:px-[36px]  lg:px-[128px]">
                <h2>Read Reviews And Meet Escorts / Providers</h2>
                <h3>(Sign up / Search listings below)</h3>



                <div className="ClientProviders md:flex items-center justify-between gap-8 mt-[50px] px-4 md:px-0">

                    <div className="ClientPAR">
                        <div className="Client">

                            <h5>Clients</h5>
                            <div className="Step">
                                <h2>Read Reviews</h2>
                                <p>There are lots of factors to weigh before hiring a Provider. We think checking out their reviews should be one of them. PrivateDelights is the best place for Provider reviews.</p>
                            </div>
                            <div className="Step">
                                <h2>Verified Providers</h2>
                                <p>Every single provider on PrivateDelights is age verified (ID, P411 etc). No verification = no posting.</p>
                            </div>
                            <div className="Step">
                                <h2>Quick Screening</h2>
                                <p>Safe providers will only see you after you're screened. With PrivateDelights, providers can quickly screen you by seeing the reviews you've left..</p>
                            </div>
                            <div className="Step">
                                <h2>One Stop</h2>
                                <p>Location-specific searches, detailed listings, saving favorites and more. PrivateDelights is the only provider site you'll ever need.</p>
                            </div>
                            <div className="Step">
                                <h2>Based in Europe</h2>
                                <p>Our domain is registered in Switzerland, our team is based in the Netherlands and our site is hosted on servers across Europe.</p>
                            </div>

                        </div>
                        <Link to="/login">
                            <button className="ClientSingUp w-[260px]">Client Sign Up</button>
                        </Link>
                    </div>


                    <div className="ProviderPAR mt-[78px] md:mt-[0px]">
                        <div className="Provider">

                            <h5>Providers</h5>

                            <div className="Step">
                                <h2>Collect Reviews</h2>
                                <p>PrivateDelights makes it really simple to quickly collect reviews from your clients, and publicly respond to them. More reviews = more clients.</p>
                            </div>
                            <div className="Step">
                                <h2>Join A Community</h2>
                                <p>PrivateDelights provides a safe, moderated space where Verified Providers can gather to chat and help each other.</p>
                            </div>
                            <div className="Step">
                                <h2>Screen Clients</h2>
                                <p>Quickly screen a potential client by checking out their verified reviews for other providers. Use PrivateDelights to protect yourself from bad experiences.</p>
                            </div>
                            <div className="Step">
                                <h2>Beautiful Listings</h2>
                                <p>Dedicated, full-page listings with gorgeous images and plenty of room for details and contact info.</p>
                            </div>
                            <div className="Step">
                                <h2>Based in Europe</h2>
                                <p>Our domain is registered in Switzerland, our team is based in the Netherlands and our site is hosted on servers across Europe.</p>
                            </div>


                        </div>
                        <Link to="/login">
                            <button className="ProviderSingUp w-[260px]">Provider Sign Up</button>
                        </Link>
                    </div>


                </div>

            </div>

        </div>
    );
};

export default ClientProviders;