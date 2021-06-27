import styled from 'styled-components';

const Map = () => {
    return (
        <Container>
            <iframe
                title='asd'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95316.56909806575!2d44.72569010732852!3d41.706646586617936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404473060a283411%3A0xb0f9d2a9c8a40cdd!2s9%20Giorgi%20Dzotsenidze%20St%2C%20T&#39;bilisi!5e0!3m2!1sen!2sge!4v1624766975488!5m2!1sen!2sge'
                width='600'
                height='450'
                style={{ border: 0 }}
                allowfullscreen=''
                loading='lazy'
            ></iframe>
        </Container>
    );
};

export default Map;

const Container = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
