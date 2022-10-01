import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { CardEntry } from '../data-fetch';

const initialState: CardEntry[] = [];

export const { actions, reducer } = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        loadCards: (_state, { payload }: PayloadAction<CardEntry[]>) => {
            return payload;
        },
    },
});
