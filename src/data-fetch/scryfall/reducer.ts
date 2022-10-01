import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ScryfallCard } from './types';

interface PossibleFilters {
    set: ScryfallCard[];
}

const initialState: PossibleFilters = { set: [] };

export const { actions, reducer } = createSlice({
    name: 'scryfallSet',
    initialState,
    reducers: {
        loadSet: (_state, { payload }: PayloadAction<ScryfallCard[]>) => {
            return { set: payload };
        },
    },
});
