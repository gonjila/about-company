import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Home from './COMPONENTS/HOME';
import Services from './COMPONENTS/SERVICES';
import Portfolio from './COMPONENTS/PORTFOLIO';
import AboutUs from './COMPONENTS/ABOUT US';
import OurTeam from './COMPONENTS/OUR TEAM';
import Partners from './COMPONENTS/PARTNERS';
import Contact from './COMPONENTS/CONTACT';
import ToTop from './COMPONENTS/ToTop';
import Footer from './COMPONENTS/FOOTER';

const AboutProject = React.lazy(() => import('./COMPONENTS/PORTFOLIO/AboutProject.jsx'));

function App() {
    return (
        <Container>
            <Suspense fallback={<div>page is loading...</div>}>
                <Switch>
                    <Route exact={true} path='/'>
                        <Home />

                        <Services />

                        <Portfolio />

                        <AboutUs />

                        <OurTeam />

                        <Partners />

                        <Contact />

                        <ToTop />

                        <Footer />
                    </Route>

                    <Route exact={true} path='/about-project'>
                        <AboutProject />
                    </Route>
                </Switch>
            </Suspense>
        </Container>
    );
}

export default App;

const Container = styled.div`
    position: relative;
    min-height: 100vh;
`;
