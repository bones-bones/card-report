import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PossibleFilters {
    expansions: string[];
    formats: string[];
}

const initialState: {
    possibleFilters?: PossibleFilters;
    appliedSet: string;
} = { appliedSet: 'DMU' };

export const { actions, reducer } = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        loadFilters: (state, { payload }: PayloadAction<PossibleFilters>) => {
            return { ...state, possibleFilters: payload };
        },
        applyExpansion: (state, { payload }: PayloadAction<string>) => {
            return { ...state, appliedSet: payload };
        },
    },
});
