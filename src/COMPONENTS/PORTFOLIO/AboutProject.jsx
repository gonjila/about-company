import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AboutProject = () => {
    return (
        <Container>
            <InnerContainer>
                <div className='button-wrapper'>
                    <Link exact to='/'>
                        <img alt='close mark' src='images/close.svg' />
                    </Link>
                </div>
                <TextWrapper>
                    <div className='main-div'>
                        <img alt='' src='images/portfolio-1.png' />
                        <div>
                            <h3 className='project'>Projecta Name</h3>
                            <p className='category'>Category</p>
                            <p>
                                mes of Good and Evil by Cicero, written in 45 BC. This book is a treatise on the
                                theory of ethics, very popular during the Renaissance. The first line of Lorem
                                Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                            </p>
                            <p>
                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for
                                those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
                                by Cicero are also reproduced in their exact original form, accompanied by English
                                versions from the 1914 translation by H. Rackham.
                            </p>
                        </div>

                        <div>
                            <p>
                                <span>Date:</span> January 2020
                            </p>
                            <p>
                                <span>Client:</span> Explore
                            </p>
                            <p>
                                <span>Category:</span> Graphic Design
                            </p>
                        </div>
                    </div>
                </TextWrapper>
            </InnerContainer>
        </Container>
    );
};

export default AboutProject;

const Container = styled.div`
    color: black;
    padding: 10vh 8vw;
    width: calc(84vw - 17px);
    background-color: #707070;
    overflow: hidden;
`;

const InnerContainer = styled.div`
    height: 100%;
    width: 80vw;
    border-radius: 10px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .button-wrapper {
        width: 100%;
        display: flex;
        justify-content: flex-end;

        img {
            width: 25px;
            height: 25px;
            padding: 15px;
            margin: 15px;
            border-radius: 10px;
            background-color: #e0e0e0;
        }
    }
`;

const TextWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .main-div {
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 50px;

        div {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            .project {
                font-size: 1.8rem;
            }
            .category {
                padding: 5px 15px;
                font-size: 1rem;
                border: 2px solid #e0e0e0;
                border-radius: 7px;
            }

            p {
                span {
                    font-weight: bold;
                }
            }
        }

        img {
            width: 770px;
            height: 450px;
        }
    }
`;
