import styled from 'styled-components';

import Companies from './Companies';

const Partners = () => {
    return (
        <Container>
            <Title>PARTNERS</Title>
            <Companies />
        </Container>
    );
};

export default Partners;

const Container = styled.div`
    min-height: 45vh;
    margin-bottom: 40px;
    padding: 0px 5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Title = styled.div`
    width: 100%;
    font: normal normal 600 32px/48px Montserrat;
    margin: 30px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
