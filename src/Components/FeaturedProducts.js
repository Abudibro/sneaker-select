import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import  { Swiper , SwiperSlide}  from 'swiper/react';
import SwiperCore, { Scrollbar } from 'swiper';
import 'swiper/swiper-bundle.css';
import styled from 'styled-components';

SwiperCore.use([Scrollbar]);

const Wrapper = styled.div`
    width: 100%;
    background-color: white;
    padding-bottom: 70px;
`;

const CategorySectionTitle = styled.p`
    font-size: 1.4rem;
    color: black;
    margin-bottom: 0;
    background-color: white;
    padding: 40px;
    padding-left: 80px;
    margin-top: 50px;
    font-weight: 600;
    @media (max-width: 935px) {
        text-align: center;
        padding-left: 0;
    }
`;

export const ItemCard = styled.div`
    height: auto;
    width: 370px;
    cursor: pointer;

    &:hover .featured-item-img {
        transform: scale(1.03);
    }
    &:hover .featured-item-detail {
        color: black;
    }

    @media (max-width: 499px) {
        width: 330px;
    }
`;

export const ImageWrapper = styled.div`
    display: inline-block;
    overflow: hidden;  
`;

export const ItemImage = styled.img`
    height: 370px;
    width: 370px;
    object-fit: cover;
    transition: all .4s ease;
    @media (max-width: 499px) {
        height: 330px;
        width: 330px;
    }
`;

export const ItemDetail = styled.p`
    font-size: 17px;
    margin: 0;
    // color: rgb(75, 74, 74);
    color: black;
    transition: all .3s ease;
    font-weight: 500 !important;
`;


function FeaturedProducts(props) {

    const [widthSize, setWidthSize] = useState(window.innerWidth <= 790 ? 'XS' : window.innerWidth <= 1180 ? 'S' : window.innerWidth <= 1600 ? 'M' : 'L');

    const handleResize = () => {
        if (window.innerWidth <= 790) setWidthSize('XS');
        else if (window.innerWidth <= 1180) setWidthSize('S');
        else if (window.innerWidth <= 1600) setWidthSize('M');
        else setWidthSize('L')
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize, false);
    }, []);

    return (
        <>
        <CategorySectionTitle>Gear Up</CategorySectionTitle>
        <Wrapper>
            <Swiper
                scrollbar={{ draggable: true }}
                speed={500}
                slidesPerView={widthSize === 'L' ? 4 : widthSize === 'M' ? 3 : widthSize === 'S' ? 2 : 1}
                spaceBetween={0}
                style={{backgroundColor: 'white', paddingBottom: '80px'}}
            >
                {
                    props.itemCardsData.map((item, i) => {
                        if (item.featured) {
                            return (
                                <SwiperSlide>
                                    <Link to={{
                                        pathname: `/shop/${item.id}`,
                                        state: {item: item}
                                    }} className='link'>
                                        <ItemCard>
                                            <ImageWrapper>
                                                <ItemImage src={item.img[0]} className='featured-item-img'/>
                                            </ImageWrapper>
                                            <ItemDetail className='featured-item-detail'>{item.name}</ItemDetail>
                                            <ItemDetail className='featured-item-detail'>£{item.price}</ItemDetail>
                                        </ItemCard>
                                    </Link>
                                </SwiperSlide>
                            )
                        }

                        return <div></div>;
                    })
                }
            </Swiper>
            
        </Wrapper>
        </>
    )
}

export default FeaturedProducts ;
