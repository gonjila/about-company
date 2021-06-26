import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImgSlider = () => {
    const settings = {
        dots: true,
        arrow: true,
        lazyLoad: true,
        infinite: true,
        autoplay: false,
        speed: 3000,
        pauseOnDotsHover: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Component className='sliderContainer'>
            <Carousel {...settings}>
                <div>
                    <img alt='' src='images/working.jpg' />
                </div>
                <div>
                    <img alt='' src='images/computer.jpg' />
                </div>
                <div>
                    <img alt='' src='images/network.jpg' />
                </div>
                <div>
                    <img alt='' src='images/coding.jpg' />
                </div>
                <div>
                    <img alt='' src='images/pc.jpg' />
                </div>
            </Carousel>
        </Component>
    );
};

export default ImgSlider;

const Component = styled.div`
    height: 100vh;

    .slick-arrow {
        width: auto;
        height: auto;
        top: 85%;
        z-index: 5;

        &:before {
            padding: 35px;
            border-radius: 10px;
            /* font-size: 70px; */
            /* width: 50px; */
            /* border: 5px solid red; */
        }
    }

    //marcxena isari
    .slick-prev {
        position: absolute;
        right: 180px;
        left: auto;

        &:before {
            content: url('images/left-arrow.svg');
            background-color: rgba(255, 255, 255, 0.3);
        }
    }

    //marjvena isari
    .slick-next {
        position: absolute;
        /* height: auto;
        width: auto; */
        right: 50px;

        &:before {
            content: url('images/down-arrow.svg');
            background-color: white;
        }
    }

    .slick-dots {
        /* background-color: red; */
        position: absolute;
        height: auto;
        width: auto;
        left: 50px;
        bottom: 50%;
        display: flex !important;
        flex-direction: column;
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
    height: 100%;
    /* cursor: pointer; */

    div {
        height: 100%;

        img {
            bottom: 0;
            height: 100%;
            width: 100%;
            opacity: 0.6;
            /* box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
            transition-duration: 300ms; */
            z-index: -1;
        }
    }
`;
