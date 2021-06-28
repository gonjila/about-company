import styled from 'styled-components';

const Form = ({ mapActivated }) => {
    return (
        <Container style={mapActivated ? { pointerEvents: 'none', opacity: 0.4 } : {}}>
            <div>
                <input type='text' placeholder='Your Name' />
                <input type='mail' placeholder='Your Email *' required />
            </div>
            <div>
                <input type='tel' placeholder='Your Phone *' required />
                <input type='text' placeholder='Subject' />
            </div>
            <input className='message' type='text' placeholder='Your Message *' required />
            <button type='submit'>Send Message</button>
        </Container>
    );
};

export default Form;

const Container = styled.form`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* pointer-events: none;
    opacity: 0.4; */

    div {
        input {
            /* width: 270px !important; */
            max-width: 270px;
            min-width: 260px;
            height: 60px;
            margin-bottom: 30px;

            &:not(:last-child) {
                margin-right: 15px;
            }
        }
    }

    input {
        font: normal normal normal 16px/24px Segoe UI;
        min-width: 550px;
        max-width: 570px;
        height: 180px;
        padding-left: 15px;
        margin-bottom: 30px;
        border: 1px solid #bdc3c7;
        border-radius: 5px;
        overflow: auto;

        ::placeholder {
            /* vertical-align: text-top; */
            /* text-align: center; */
        }
    }

    button {
        font: normal normal normal 16px/24px Segoe UI;
        width: 570px;
        height: 60px;
        color: #ffffff;
        background-color: #1565c0;
        border: none;
        border-radius: 5px;
    }
`;
