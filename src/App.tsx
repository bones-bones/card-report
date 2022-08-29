import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { actions } from './cards';
import { selectCards } from './cards/selectors';
import { fetchCardData } from './data-fetch';
import { TopCommons } from './top-commons';
import Logo from './resources/logo.svg';
import { fetchFilters } from './data-fetch/fetchFilters';
import { actions as filterActions } from './filters/reducer';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { RemovalRankings } from './removal';
import { RoundRobin } from './round-robin';

const RouteApp = () =>
    useRoutes([
        { path: '/', element: <TopCommons /> },
        { path: '/commonsAndUncommons', element: <TopCommons /> },
        { path: '/isRemovalBadActually', element: <RemovalRankings /> },
        { path: '/roundRobin', element: <RoundRobin /> },
    ]);

function App() {
    const dispatch = useDispatch();
    const cards = useSelector(selectCards);

    useEffect(() => {
        fetchCardData('SNC').then((resp) => {
            dispatch(actions.loadCards(resp));
        });
        fetchFilters().then((resp) => {
            dispatch(filterActions.loadFilters(resp));
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
                    <BrowserRouter basename="card-report">
                        <RouteApp />
                    </BrowserRouter>
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
