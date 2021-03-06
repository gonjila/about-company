import React from 'react';
import styled from 'styled-components';

const AboutHome = () => {
    return (
        <Container>
            <Title>We Do Software Development</Title>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas aliquam cum porro animi beatae
                culpa modi provident officiis.
            </Text>
            <Buttons>
                <button className='button-1' type='button'>
                    READ MORE
                </button>
                <button className='button-2' type='button'>
                    Contact Us
                </button>
            </Buttons>
        </Container>
    );
};

export default AboutHome;

const Container = styled.div`
    color: white;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 3;
`;

const Title = styled.div`
    font: normal normal 600 40px/60px Montserrat;
    letter-spacing: 1.5px;
    margin-bottom: 20px;
`;

const Text = styled.div`
    margin-bottom: 20px;
    font: normal normal normal 16px/24px Segoe UI;
    text-align: center;
    width: 700px;
`;

const Buttons = styled.div`
    button {
        color: white;
        font: normal normal 600 16px/24px Montserrat;
        border-radius: 5px;
        margin: 10px;
        padding: 15px 25px;
        cursor: pointer;
    }
    .button-1 {
        border: 1px solid #1565c0;
        background-color: #1565c0;
    }

    .button-2 {
        border: 1px solid white;
        background-color: transparent;
    }
`;
