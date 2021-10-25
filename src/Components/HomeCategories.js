import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import  { Swiper , SwiperSlide}  from 'swiper/react';
import SwiperCore, { Scrollbar } from 'swiper';
import 'swiper/swiper-bundle.css';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    background-color: white;
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

const Category = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    &:hover .category-img {
        transform: scale(1.05);
    }
`;

const Image = styled.img`
    object-fit: cover;
    height: 166px;
    width: 166px;
    transition: all .2s ease;
    // @media screen and (max-width: 1400px) {
    //     height: 150px;
    //     width: 150px;
    // }

    @media screen and (max-width: 1232px) {
        height: 130px;
        width: 130px;
    }

    // @media screen and (max-width: 1100px) {
    //     height: 120px;
    //     width: 120px;
    // }

    // @media screen and (max-width: 630px) {
    //     height: 80px;
    //     width: 80px;
    // }

    // @media screen and (max-width: 500px) {
    //     height: 60px;
    //     width: 60px;
    // }
`;

const ImageWrapper = styled.div`
    display: inline-block;
    overflow: hidden;  
    border-radius: 50%;
    margin-bottom: 10px
`;

const categories = [
    {
        category: 'Men',
        img: 'https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/f8fnkoidfqtcthlqcqls/fc-football-t-shirt-BBXdd6.jpg'
    },
    {
        category: 'Women',
        img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/241c485a-27a6-46cb-b951-2acc64563205/sportswear-tech-fleece-windrunner-hoodie-3jcHXn.png'
    },
    {
        category: 'Lifestyle',
        img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a31b545c-5007-417a-8b15-a722ae69d76c/custom-nike-blazer-mid-77-vintage-by-you.png'
    },
    {
        category: 'Running',
        img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6d21d736-6a4b-441b-b756-c6d591a379d3/zoomx-vaporfly-next-2-og-mens-racing-shoes-glWqfm.png'
    },
    {
        category: 'Football',
        img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4461a557-265f-4e3a-9b43-b54a1c90054c/mercurial-superfly-8-elite-fg-football-boots-s56jRp.png'
    },
    {
        category: 'Training',
        img: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b40444ce-f06d-497e-86c4-f57050179219/metcon-7-amp-training-shoes-zrRV5L.png'
    },
    {
        category: 'Basketball',
        img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f5bd60d4-b46e-47bc-8429-ca4d4fdaa4f3/lebron-18-basketball-shoes-d9WfPf.png'
    }
];

SwiperCore.use([Scrollbar]);

function HomeCategories() {
    const [widthSize, setWidthSize] = useState(window.innerWidth <= 650 ? 'S' : window.innerWidth <= 1232 ? 'M' : 'L');

    const handleResize = () => {
        if (window.innerWidth <= 650) setWidthSize('S');
        else if (window.innerWidth <= 1232) setWidthSize('M');
        else setWidthSize('L')
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize, false);
    }, []);


    return (
        <Wrapper>
            <CategorySectionTitle >Shop By Category</CategorySectionTitle>
            <Swiper
            speed={500}
            scrollbar={{ draggable: true }}
            slidesPerView={widthSize === 'L' ? 5 : widthSize === 'M' ? 3 : 2}
            spaceBetween={0}
            style={{backgroundColor: 'white', paddingBottom: '50px'}}
            >
                {
                    categories.map((category, i) => {
                        return (
                            <SwiperSlide>
                                <Link to={{
                                    pathname: '/shop',
                                    state: {category: category.category}
                                }} className='link'>
                                    <Category>
                                        <ImageWrapper>
                                            <Image className='category-img' src={category.img} />
                                        </ImageWrapper>
                                        <h5 style={{color: 'black', margin: '10px'}}>{category.category}</h5>
                                    </Category>
                                </Link>
                            </SwiperSlide>
                        );
                    })
                }
            </Swiper>
        </Wrapper>
    )
}

export default HomeCategories
