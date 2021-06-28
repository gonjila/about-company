import React from 'react';
import styled from 'styled-components';

const ServiceWrapper = () => {
    return (
        <Container>
            <Chain>
                <img className='background' alt='' src='images/Blockchain-Teaser.png' />
                <img className='logo' alt='blockchain logo' src='images/chain.svg' />
                <h3>BlockChain</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo odio aspernatur, quasi
                    dolore odit aliquam eius itaque adipisci dolor.
                </p>
            </Chain>
            <Development>
                <img className='background' alt='' src='images/development-background.png' />
                <img className='logo' alt='development logo' src='images/development.svg' />

                <h3>Web Development</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo odio aspernatur, quasi
                    dolore odit aliquam eius itaque adipisci dolor.
                </p>
            </Development>
            <Security>
                <img className='background' alt='' src='images/security-background.png' />
                <img className='logo' alt='security logo' src='images/security.svg' />
                <h3>Web Security</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo odio aspernatur, quasi
                    dolore odit aliquam eius itaque adipisci dolor.
                </p>
            </Security>
        </Container>
    );
};

export default ServiceWrapper;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;

    div {
        width: 320px;
        height: 320px;
        padding: 0px 20px;
        border-radius: 10px;
        background-color: #e7e7e7;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        z-index: 5;

        h3 {
            font: normal normal 600 24px/36px Montserrat;
            margin: 0px 0px 5px;
        }
        p {
            font: normal normal normal 16px/24px Segoe UI;
            margin: 5px 0px 10px;
        }
    }

    .background {
        transform: translateY(-130px);
        position: absolute;
        z-index: -1;
    }

    .logo {
        width: 40px;
        height: 40px;
        margin-bottom: 15px;
        border-radius: 15px;
        background-color: #e7e7e7;
        padding: 10px;
        z-index: 5;
    }
`;

const Chain = styled.div``;
const Development = styled.div``;
const Security = styled.div``;
