import React from 'react';
import styled from 'styled-components';

const Navigation = () => {
    return (
        <NavigationBar>
            <Logo>LOGO</Logo>
            <ClassComponents>
                <a href='/'>ABOUT</a>
                <a href='/'>SERVICE</a>
                <a href='/'>PROJECTS</a>
                <a href='/'>TEAM</a>
                <a href='/'>CONTACT</a>
            </ClassComponents>
        </NavigationBar>
    );
};

export default Navigation;

const NavigationBar = styled.nav`
    padding: 0px 10vw;
    height: 15vh;
    width: calc(100vw - 20vw - 17px);
    /* width: 100%; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    z-index: 5;
`;

const Logo = styled.div`
    font-size: 2.5rem;
`;

const ClassComponents = styled.ul`
    font-size: 1.2rem;
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
