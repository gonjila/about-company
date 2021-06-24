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
