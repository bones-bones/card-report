import { RootState } from '../store';

export const selectPossibleFilters = (state: RootState) =>
    state.filters.possibleFilters;

export const selectActiveSet = (state: RootState) => state.filters.appliedSet;
