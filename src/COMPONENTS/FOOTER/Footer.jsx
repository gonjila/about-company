import styled from 'styled-components';

const Footer = () => {
    return (
        <Container>
            <div className='privacy'>
                <div>Privacy Policy</div>
                <div>Terms of Use</div>
            </div>

            <div className='Copyright'>Copyright © Your Website 2020</div>

            <div className='icons'>
                <div>
                    <img className='fb' alt='facebook icon' src='images/fb-white-icon.png' />
                </div>
                <div>
                    <img className='linkedIn' alt='linkedIn icon' src='images/linkedIn-white-icon.png' />
                </div>
                <div>
                    <img className='tweeter' alt='tweeter icon' src='images/tweeter-white-icon.png' />
                </div>
            </div>
        </Container>
    );
};

export default Footer;

const Container = styled.div`
    width: calc(100vw - 17px);
    height: 120px;
    color: #ffffff;
    background-color: #1d1d1d;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .privacy {
        display: flex;
        font: normal normal normal 16px/24px Segoe UI;

        div {
            &:first-child {
                /* width: 94px; */
                height: 21px;
            }
            &:last-child {
                /* width: 90px; */
                height: 21px;
            }
            &:not(:last-child) {
                margin-right: 30px;
            }
        }
    }

    .Copyright {
        width: 224px;
        height: 21px;
        font: normal normal normal 16px/24px Segoe UI;
    }

    .icons {
        display: flex;

        div {
            width: 40px;
            height: 40px;
            background-color: rgba(255, 255, 255, 0.05);
            display: flex;
            justify-content: center;
            align-items: center;

            .fb {
                width: 8px;
                height: 16px;
            }

            .linkedIn {
                width: 14px;
                height: 14px;
            }

            .tweeter {
                width: 17px;
                height: 14px;
            }

            &:not(:last-child) {
                margin-right: 10px;
            }
        }
    }
`;
