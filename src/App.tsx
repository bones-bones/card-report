import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter,
    useLocation,
    useParams,
    useRoutes,
} from 'react-router-dom';

import { actions, selectCards } from './cards';
import { fetchCardData, fetchFilters } from './data-fetch';
import { getSet } from './data-fetch/scryfall';
import { actions as scryfallActions } from './data-fetch/scryfall/reducer';
import { actions as filterActions } from './filters/reducer';
import { Header } from './header';
// import { selectScryfallSet } from './data-fetch/scryfall/selectors';
import { Keywords } from './keywords';
import { RemovalRankings } from './removal';
import Logo from './resources/logo.svg';
import { RoundRobin } from './round-robin';
import { SplashPage } from './splash-page';
import { TopCommons } from './top-commons';

const RouteApp = () =>
    useRoutes([
        { path: '/', element: <SplashPage /> },
        { path: '/commonsAndUncommons', element: <TopCommons /> },
        { path: '/isRemovalBadActually', element: <RemovalRankings /> },
        { path: '/roundRobin', element: <RoundRobin /> },
        { path: '/keywords', element: <Keywords /> },
    ]);

function App() {
    const dispatch = useDispatch();
    const cards = useSelector(selectCards);

    const { search } = useLocation();

    useEffect(() => {
        let set = 'DMU';
        if (search) {
            const extractedSet = /set=(.*)/.exec(search);
            if (extractedSet) {
                set = extractedSet[1];
            }
        }

        fetchCardData(set).then((resp) => {
            dispatch(actions.loadCards(resp));
        });
        fetchFilters().then((resp) => {
            dispatch(filterActions.loadFilters(resp));
        });
        getSet(set).then((resp) => {
            dispatch(scryfallActions.loadSet(resp));
        });
    }, []);

    return (
        <>
            {cards.length === 0 ? (
                <LogoContainer>
                    <LogoImage src={Logo} />
                </LogoContainer>
            ) : (
                <>
                    <Header />
                    <RouteApp />
                </>
            )}
        </>
    );
}

export default App;

const LogoContainer = styled.div({
    height: '100vh',
    margins: '0px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const contrastSaturateString = 'contrast(1.5) saturate(7);';
const hueKeyframes = keyframes({
    '0%, 100%': {
        filter: ' invert(0%) ' + contrastSaturateString,
    },
    '50% ': {
        filter: ' invert(90%) ' + contrastSaturateString,
    },
});

const LogoImage = styled.img({
    height: '50vh',
    animation: `${hueKeyframes}  1.5s infinite`,
});
