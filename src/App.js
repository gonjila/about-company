import styled from 'styled-components';
import Home from './COMPONENTS/Home.jsx';

function App() {
    return (
        <Container>
            <Home />
        </Container>
    );
}

export default App;

const Container = styled.div`
    position: relative;
    min-height: 100vh;
`;
