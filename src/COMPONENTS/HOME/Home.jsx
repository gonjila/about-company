import React from 'react';
import styled from 'styled-components';

import Navigation from './Navigation';
import ImgSlider from './ImgSlider';
import AboutHome from './AboutHome';

const Home = () => {
    return (
        <Container className='homeContainer'>
            <Navigation />
            <AboutHome />
            <ImgSlider />
            <ScrollImage alt='scrolling icon' src='images/scroll-icon.png' />
        </Container>
    );
};

export default Home;

const Container = styled.div`
    color: white;
    width: 100%;
    /* overflow: hidden; */
    background-color: black;
    position: relative;
`;

const ScrollImage = styled.img`
    position: absolute;
    top: 85%;
    left: 40px;
    width: 41px;
    height: 53px;
    z-index: 15;
`;
