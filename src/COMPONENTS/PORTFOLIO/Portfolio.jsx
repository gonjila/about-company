import React from 'react';
import styled from 'styled-components';

import ProjectWrapper from './ProjectWrapper';

const Portfolio = () => {
    return (
        <Component id='projects'>
            <Title>
                <div className='title'>PORTFOLIO</div>
                <div className='arrows'>
                    <button type='button'>
                        <img alt='left arrow' src='images/black-left-arrow.png' />
                    </button>
                    <button type='button'>
                        <img alt='right arrow' src='images/black-right-arrow.png' />
                    </button>
                </div>
            </Title>
            <ProjectWrapper />
        </Component>
    );
};

export default Portfolio;

const Component = styled.div`
    min-height: 70vh;
    /* width: 100%; */
    padding: 0px 5vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Title = styled.div`
    width: 100%;
    font: normal normal 600 32px/48px Montserrat;
    margin: 30px 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title {
    }
    .arrows {
        button {
            background-color: #e7e7e7;
            width: 55px;
            height: 55px;
            border: none;
            border-radius: 10px;
            margin: 0px 5px;
        }
    }
`;
