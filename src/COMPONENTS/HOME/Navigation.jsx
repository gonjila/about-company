import React from 'react';
import styled from 'styled-components';

const Navigation = () => {
    return (
        <NavigationBar>
            <Logo>LOGO</Logo>
            <ClassComponents>
                <a href='#about'>ABOUT</a>
                <a href='#services'>SERVICE</a>
                <a href='#projects'>PROJECTS</a>
                <a href='#team'>TEAM</a>
                <a href='#contact'>CONTACT</a>
            </ClassComponents>
        </NavigationBar>
    );
};

export default Navigation;

const NavigationBar = styled.nav`
    padding: 0px 10vw;
    height: 15vh;
    width: calc(100vw - 20vw - 17px);
    /* width: calc(100vw - 20vw); */
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    z-index: 5;
`;

const Logo = styled.div`
    font: normal normal 600 40px/60px Montserrat;
`;

const ClassComponents = styled.ul`
    font: normal normal normal 18px/24px Segoe UI;
    display: flex;

    a {
        text-decoration: none;

        &:link {
            color: white;
        }
        &:visited {
            color: white;
        }
        &:hover {
            color: rgba(255, 255, 255, 0.7);
        }
        &:active {
            color: red;
        }

        &:not(:last-child) {
            margin-right: 20px;
        }
    }
`;
