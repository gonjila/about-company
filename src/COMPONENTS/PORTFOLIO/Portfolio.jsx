import React from 'react';
import styled from 'styled-components';

import ProjectWrapper from './ProjectWrapper';

const Portfolio = () => {
    return (
        <Component>
            <Title>
                <div className='title'>PORTFOLIO</div>
                <div className='arrows'>
                    <button type='button'>
                        <img alt='left arrow' src='images/left-arrow.svg' />
                    </button>
                    <button type='button'>
                        <img alt='right arrow' src='images/right-arrow.svg' />
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
    font-size: 2.2rem;
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
