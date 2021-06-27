import styled from 'styled-components';

const ToTop = () => {
    const onButtonClick = event => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };

    return (
        <Container>
            <button id='myBtn' type='button' onClick={onButtonClick}>
                <img alt='to top icon' src='images/to-top-icon.png' />
            </button>
        </Container>
    );
};
export default ToTop;

const Container = styled.div`
    width: 34px;
    height: 43px;
    position: absolute;
    right: 32px;
    bottom: 150px;
    z-index: 15;

    button {
        border: none;
        background-color: inherit;

        img {
        }
    }
`;
