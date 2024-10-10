import React from 'react';
import "./Home.css"
import ClientProviders from '../HomeAllSection/ClientProviders/ClientProviders';
import SearchTab from '../HomeAllSection/SearchTab/SearchTab';

const Home = () => {
    return (
        <div className="">
            <ClientProviders></ClientProviders>
            <SearchTab></SearchTab>
            
        </div>
    );
};

export default Home;