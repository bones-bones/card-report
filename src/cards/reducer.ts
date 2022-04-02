import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardEntry } from '../data-fetch';

const initialState: CardEntry[] = [];

export const { actions, reducer } = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        loadInitial: (_state, { payload }: PayloadAction<CardEntry[]>) => {
            return payload;
        },
    },
});
