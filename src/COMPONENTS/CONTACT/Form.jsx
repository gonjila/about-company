import styled from 'styled-components';

const Form = () => {
    return (
        <Container>
            <div>
                <input type='text' placeholder='Your Name' />
                <input type='mail' placeholder='Your Email *' />
            </div>
            <div>
                <input type='tel' placeholder='Your Phone *' />
                <input type='text' placeholder='Subject' />
            </div>
            <input className='message' type='text' placeholder='Your Message *' />
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

    div {
        input {
            width: 270px;
            height: 60px;
            margin-bottom: 30px;

            &:not(:last-child) {
                margin-right: 25px;
            }
        }
    }

    input {
        width: 570px;
        height: 180px;
        margin-bottom: 30px;
        border: 1px solid #bdc3c7;
        border-radius: 5px;
    }

    button {
        width: 570px;
        height: 60px;
        color: #ffffff;
        background-color: #1565c0;
        border-radius: 5px;
    }
`;
