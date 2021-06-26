import React from 'react';
import styled from 'styled-components';

import ServiceWrapper from './ServiceWrapper';

const Services = () => {
    return (
        <Container>
            <Title>SERVICES</Title>
            <ServiceWrapper />
        </Container>
    );
};

export default Services;

const Container = styled.div`
    color: black;
    height: 70vh;
    /* width: 100%; */
    padding: 0px 5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: space-between; */
    position: relative;
    overflow: hidden;
`;

const Title = styled.div`
    font-size: 2.2rem;
    margin: 10px 0px 50px;
    text-align: center;
`;
