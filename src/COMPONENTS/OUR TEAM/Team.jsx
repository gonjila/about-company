import styled from 'styled-components';

import Members from './Members';

const Team = () => {
    return (
        <Container id='team'>
            <Title>
                <div className='title'>OUR TEAM</div>
                <div className='arrows'>
                    <button type='button'>
                        <img alt='left arrow' src='images/black-left-arrow.png' />
                    </button>
                    <button type='button'>
                        <img alt='right arrow' src='images/black-right-arrow.png' />
                    </button>
                </div>
            </Title>
            <Members />
        </Container>
    );
};

export default Team;

const Container = styled.div`
    min-height: 70vh;
    padding: 0px 5vw;
    margin: 50px 0px;
    color: white;
    background-color: #1565c0;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Title = styled.div`
    width: 100%;
    font-size: 2.2rem;
    margin: 30px 0px;
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
