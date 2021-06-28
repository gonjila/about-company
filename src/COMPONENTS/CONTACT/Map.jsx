import styled from 'styled-components';

const Map = ({ mapActivated }) => {
    return (
        <Container style={!mapActivated ? { pointerEvents: 'none', opacity: 0.4 } : {}}>
            <iframe
                title='asd'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95316.56909806575!2d44.72569010732852!3d41.706646586617936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404473060a283411%3A0xb0f9d2a9c8a40cdd!2s9%20Giorgi%20Dzotsenidze%20St%2C%20T&#39;bilisi!5e0!3m2!1sen!2sge!4v1624766975488!5m2!1sen!2sge'
                width='570'
                height='370'
                style={{ border: 0 }}
                allowFullScreen=''
                loading='lazy'
            ></iframe>
            <div className='mail'>
                <div>contact@domain.com</div>
                <hr />
            </div>
        </Container>
    );
};

export default Map;

const Container = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    .mail {
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;

        div {
            width: 229px;
            height: 30px;
            font: normal normal 600 20px/30px Montserrat;
            text-align: left;
        }
        hr {
            width: 310px;
            height: 1px;
            background: #bdc3c7 0% 0% no-repeat padding-box;
            display: flex;
            flex-direction: column;
        }
    }
`;
