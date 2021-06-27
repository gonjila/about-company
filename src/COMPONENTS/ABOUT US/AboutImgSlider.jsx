import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AboutImgSlider = () => {
    const settings = {
        dots: true,
        arrows: false,
        lazyLoad: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        pauseOnDotsHover: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Container>
            <Carousel {...settings}>
                <div>
                    <img alt='coworking' src='images/company-1.jpg' />
                </div>
                <div>
                    <img alt='meeting' src='images/company-2.jpg' />
                </div>
                <div>
                    <img alt='hall' src='images/company-3.jpg' />
                </div>
                <div>
                    <img alt='building' src='images/company-4.jpg' />
                </div>
            </Carousel>
        </Container>
    );
};

export default AboutImgSlider;

const Container = styled.div`
    margin-left: 20px;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    .slick-dots {
        position: absolute;
        height: auto;
        width: auto;
        left: 250px;
        bottom: 20px;
        z-index: 5;
    }

    // wertilebidan romelic gaaqtiurebulia
    .slick-dots li.slick-active button:before {
        opacity: 1;
        color: white;
    }

    // wertilebi
    .slick-dots li button:before {
        font-family: 'slick';
        font-size: 10px;
        line-height: 20px;
        position: absolute;
        top: 0;
        left: 0;
        width: 20px;
        height: 20px;
        content: '•';
        text-align: center;
        opacity: 0.5;
        color: white;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

const Carousel = styled(Slider)`
    width: 100%;
    height: 100%;

    div {
        border-radius: 15px;
        box-shadow: 20px 15px 0px 0px #e3e3e3;
        img {
            height: 360px;
            width: 100%;
            border-radius: 15px;
        }
    }
`;
