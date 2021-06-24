import styled from 'styled-components';

import Home from './COMPONENTS/HOME';
import Services from './COMPONENTS/SERVICES';

function App() {
    return (
        <Container>
            <Home />
            <Services />
        </Container>
    );
}

export default App;

const Container = styled.div`
    position: relative;
    min-height: 100vh;
`;
