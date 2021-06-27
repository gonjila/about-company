import { useState } from 'react';
import styled from 'styled-components';

import Form from './Form';
import Map from './Map';

const Contact = () => {
    const [mapActivated, setMapActivated] = useState(true);

    const onFormClick = () => {
        setMapActivated(false);
    };

    const onMapClick = () => {
        setMapActivated(true);
    };

    return (
        <Container id='contact'>
            <Title>
                <div className={!mapActivated ? 'form-div' : ''}>
                    <button type='button' onClick={onFormClick}>
                        CONTACT US
                    </button>
                </div>
                <div className={mapActivated ? 'map-div' : ''}>
                    <button type='button' onClick={onMapClick}>
                        MAP
                    </button>
                </div>
            </Title>

            <div className='content'>
                <Form mapActivated={mapActivated} />
                <Map mapActivated={mapActivated} />
            </div>
        </Container>
    );
};

export default Contact;

const Container = styled.div`
    min-height: 80vh;
    padding: 0px 5vw;
    margin-bottom: 100px;

    .content {
        width: 100%;
        display: flex;
    }
`;

const Title = styled.div`
    width: 100%;
    margin: 30px 0px;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
        width: 285px;
        border-bottom: 1px solid gray;
        display: flex;
        justify-content: center;

        button {
            font-size: 2.2rem;
            border: transparent;
            background-color: inherit;
        }
    }

    .map-div {
        border-bottom: 3px solid blue;
        button {
            color: blue;
        }
    }

    .form-div {
        border-bottom: 3px solid blue;
        button {
            color: blue;
        }
    }
`;
