import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  { Swiper , SwiperSlide}  from 'swiper/react';
import SwiperCore, { Scrollbar } from 'swiper';
import 'swiper/swiper-bundle.css';

import airJordan from '../Resources/air-jordan.jpg';
import airMax from '../Resources/air-max.png';
import airForce from '../Resources/air-force.png';


const BestSellerTitle = styled.p`
    font-size: 1.4rem;
    color: black;
    margin-bottom: 0;
    background-color: white;
    // padding: 25px;
    padding-left: 70px;
    padding-top: 50px;
    font-weight: 600;
    @media (max-width: 935px) {
        text-align: center;
        padding-left: 0;
    }
`;

const Card = styled.div`
    height: 300px;
    width: 500px;
    display: grid;
    grid-template-columns: 1.15fr 1fr;
    margin: 20px;
    background-image: url(${props => props.bg});
    background-position: center;
    background-size: 550px 400px;
    object-fit: contain;
    border-radius: 3px;
    cursor: pointer;
    transition: all 0.3s ;
    &:hover {
        background-position: 50% calc(50% - 23px);
    };
    &:hover .see-collection {
        color: black;
        transform: translate(10px);
    };
`;

const CardTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`;

const SeeCollection = styled.p`
    color: rgb(71, 71, 71);
    margin: 20px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
`;

SwiperCore.use([Scrollbar]);

function FeaturedCollections() {

    const [widthSize, setWidthSize] = useState(window.innerWidth <= 935 ? 'S' : window.innerWidth <= 1430 ? 'M' : 'L');

    const handleResize = () => {
        if (window.innerWidth <= 935) setWidthSize('S');
        else if (window.innerWidth <= 1430) setWidthSize('M');
        else setWidthSize('L')
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize, false);
    }, []);
    
    return (
        <>
            <BestSellerTitle>Our Best Selling Collections</BestSellerTitle>
            <Swiper
                scrollbar={{ draggable: true }}
                speed={500}
                slidesPerView={widthSize === 'L' ? 3 : widthSize === 'M' ? 2 : 1}
                style={{background: 'white', paddingBottom: '40px'}}
            >
                <SwiperSlide scroll>
                    <Link to={{
                        pathname: '/shop',
                        state: {collection: 'jordan'}
                    }} className='link'>
                        <Card bg={airJordan}>
                            <CardTextContainer>
                                <strong><h3 className='featured-collection-title'>Air Jordan</h3></strong>
                                <SeeCollection className='see-collection'>See Collection<FontAwesomeIcon icon='arrow-right' style={{marginLeft: '10px'}}/></SeeCollection>
                            </CardTextContainer>
                        </Card>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                <Link to={{
                        pathname: '/shop',
                        state: {collection: 'max'}
                    }} className='link'>
                        <Card bg={airMax}>
                            <CardTextContainer>
                                <h3 className='featured-collection-title'>Air Max</h3>
                                <SeeCollection className='see-collection'>See Collection<FontAwesomeIcon icon='arrow-right' style={{marginLeft: '10px'}}/></SeeCollection>
                            </CardTextContainer>
                        </Card>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={{
                        pathname: '/shop',
                        state: {collection: 'force'}
                    }} className='link'>
                        <Card bg={airForce}>
                            <CardTextContainer>
                                <h3 className='featured-collection-title'>Air Force</h3>
                                <SeeCollection className='see-collection'>See Collection<FontAwesomeIcon icon='arrow-right' style={{marginLeft: '10px'}}/></SeeCollection>
                            </CardTextContainer>
                        </Card>
                    </Link>
                </SwiperSlide>
            </Swiper>
            
        </>
    )
}

export default FeaturedCollections
