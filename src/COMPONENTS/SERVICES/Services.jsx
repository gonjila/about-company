import React from 'react';
import styled from 'styled-components';

import ServiceWrapper from './ServiceWrapper';

const Services = () => {
    return (
        <Container id='services'>
            <Title>SERVICES</Title>
            <ServiceWrapper />
        </Container>
    );
};

export default Services;

const Container = styled.div`
    color: black;
    height: 70vh;
    padding: 0px 5vw;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
`;

const Title = styled.div`
    font: normal normal 600 32px/48px Montserrat;
    margin: 10px 0px 50px;
    text-align: center;
`;
