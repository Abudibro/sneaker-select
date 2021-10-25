import React from 'react';
import Hero from '../Components/Hero';
import FeaturedCollections from '../Components/FeaturedCollections';
import HomeCategories from '../Components/HomeCategories';
import FeaturedProducts from '../Components/FeaturedProducts';


const Home = (props) => {

    return (
        <>
            <Hero />
            <FeaturedCollections />
            <HomeCategories /> 
            <FeaturedProducts itemCardsData={props.itemCardsData} />
        </>
    )
}

export default Home;