import styled from 'styled-components';

const Members = () => {
    return (
        <Container>
            <div className='member-1'>
                <img className='member-image' alt='member-1' src='images/team-member-1.png' />
                <p className='name'>Giorgi giorgadze</p>
                <p className='profesion'>Graphic Design</p>
                <div className='social'>
                    <img alt='fb icon' src='images/fb-black-icon.svg' />
                    <img alt='linkedIn icon' src='images/linkedIn-black-icon.svg' />
                    <img alt='tweeter icon' src='images/tweeter-black-icon.svg' />
                </div>
            </div>

            <div className='member-2'>
                <img className='member-image' alt='member-2' src='images/team-member-2.png' />
                <p className='name'>EKA SHANIDZE</p>
                <p className='profesion'>CEO</p>
                <div className='social'>
                    <img alt='fb icon' src='images/fb-black-icon.svg' />
                    <img alt='linkedIn icon' src='images/linkedIn-black-icon.svg' />
                    <img alt='tweeter icon' src='images/tweeter-black-icon.svg' />
                </div>
            </div>

            <div className='member-3'>
                <img className='member-image' alt='member-3' src='images/team-member-3.png' />
                <p className='name'>Giorgi giorgadze</p>
                <p className='profesion'>Web Developer</p>
                <div className='social'>
                    <img alt='fb icon' src='images/fb-black-icon.svg' />
                    <img alt='linkedIn icon' src='images/linkedIn-black-icon.svg' />
                    <img alt='tweeter icon' src='images/tweeter-black-icon.svg' />
                </div>
            </div>
        </Container>
    );
};

export default Members;

const Container = styled.div`
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    position: relative;

    .member-1 {
        &:before {
            display: none;
            content: '';
            height: 470px;
            width: 330px;
            top: -20px;
            border-radius: 15px;
            background-color: #0652a8;
            position: absolute;
            z-index: 1;
        }
        &:hover:before {
            display: flex;
        }
    }

    .member-2 {
        &:before {
            display: none;
            content: '';
            height: 470px;
            width: 330px;
            top: -20px;
            border-radius: 15px;
            background-color: #0652a8;
            position: absolute;
            z-index: 1;
        }
        &:hover:before {
            display: flex;
        }
    }

    .member-3 {
        &:before {
            display: none;
            content: '';
            height: 470px;
            width: 330px;
            top: -20px;
            border-radius: 15px;
            background-color: #0652a8;
            position: absolute;
            z-index: 1;
        }

        &:hover:before {
            display: flex;
        }
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;

        .member-image {
            border-radius: 15px;
            z-index: 5;
        }

        .name {
            font: normal normal 600 20px/30px Montserrat;
            margin: 25px 0px 0px 0px;
        }
        .profesion {
            font: normal normal normal 16px/24px Segoe UI;
            margin: 10px 0px 25px;
        }
        .social {
            width: 300px;
            height: 70px;
            top: 320px;
            border-radius: 15px;
            background-color: rgba(255, 255, 255, 0.6);
            display: none;
            flex-direction: row;
            justify-content: space-around;
            position: absolute;
            z-index: 10;
        }

        &:hover {
            .social {
                display: flex;
            }
        }
    }
`;
