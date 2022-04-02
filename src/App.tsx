import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CustomSheet } from './custom-sheet';
import { fetchCardData } from './data-fetch';

function App() {
    useEffect(() => {
        fetchCardData();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CustomSheet />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
