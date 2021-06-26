import React from 'react';
import styled from 'styled-components';

import Content from './Content';

const AboutUs = () => {
    return (
        <Container>
            <Title>ABOUT US</Title>
            <Content />
        </Container>
    );
};

export default AboutUs;

const Container = styled.div`
    min-height: 70vh;
    padding: 0px 5vw;
    margin: 50px 0px 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Title = styled.div`
    font-size: 2.2rem;
    margin: 20px 0px;
    display: flex;
    justify-content: center;
`;
