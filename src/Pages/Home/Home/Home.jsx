import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import ChefService from '../chefService/ChefService';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';
 

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <ChefService/>
            <PopularMenu/>
            <Featured/>
        </div>
    );
};

export default Home;