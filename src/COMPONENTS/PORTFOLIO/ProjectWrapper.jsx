import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProjectWrapper = () => {
    return (
        <Container className='projects'>
            <section>
                <Link exact to='/about-project'>
                    <div className='project-name'>
                        Project Name
                        <div className='category'>Category "..."</div>
                    </div>
                    <img alt='project 1' src='images/portfolio-1.png' />
                </Link>
            </section>
            <section>
                <Link exact to='/about-project'>
                    <div className='project-name'>
                        Project Name
                        <div className='category'>Category "..."</div>
                    </div>
                    <img alt='project 2' src='images/portfolio-2.png' />
                </Link>
            </section>
            <section>
                <Link exact to='/about-project'>
                    <div className='project-name'>
                        Project Name
                        <div className='category'>Category "..."</div>
                    </div>
                    <img alt='project 3' src='images/portfolio-3.png' />
                </Link>
            </section>
        </Container>
    );
};

export default ProjectWrapper;

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    /* overflow-x: scroll !important; */
    overflow-y: hidden;

    section {
        width: 570px;
        height: 320px;
        position: relative;

        button {
            width: 100%;
            height: 100%;
            position: absolute;
            background-color: transparent;
            z-index: 100;
        }

        &:not(:last-child) {
            margin: 0px 30px 15px 0px;
        }
        &:hover {
            .project-name {
                .category {
                    display: flex;
                }
            }
        }
    }

    .project-name {
        color: white;
        font: normal normal 600 28px/42px Montserrat;
        left: 30px;
        bottom: 30px;
        position: absolute;

        .category {
            display: none;
            font: normal normal normal 16px/24px Segoe UI;
        }
    }
`;
