import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { actions } from './cards';
import { selectCards } from './cards/selectors';
import { fetchCardData } from './data-fetch';
import { TopCommons } from './top-commons';
import Logo from './resources/Logo.png';

function App() {
    const dispatch = useDispatch();
    const cards = useSelector(selectCards);

    useEffect(() => {
        fetchCardData().then((resp) => {
            dispatch(actions.loadCards(resp));
        });
    }, []);

    return (
        <>
            {cards.length === 0 ? (
                <img src={Logo} />
            ) : (
                <BrowserRouter>
                    <Routes>
                        <Route path="/card-report" element={<TopCommons />} />
                    </Routes>
                </BrowserRouter>
            )}
        </>
    );
}

export default App;
