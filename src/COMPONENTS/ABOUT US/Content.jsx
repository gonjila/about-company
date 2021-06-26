import React from 'react';
import styled from 'styled-components';

import AboutImgSlider from './AboutImgSlider';

const Content = () => {
    return (
        <Container>
            <Text>
                <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                    classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a
                    Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
                    words, consectetur, from , written in 45 BC. This book is a treatise on the theory of ethics,
                    very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
                    amet..", comes from a line in section 1.10.32.
                </p>
                <p>
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
                    interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
                    also reproduced in their exact original form, accompanied by English versions from the 1914
                    translation by H. Rackham.
                </p>
            </Text>
            <AboutImgSlider />
        </Container>
    );
};

export default Content;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Text = styled.div`
    width: 50%;

    p {
        font-size: 1.1rem;
    }
`;
