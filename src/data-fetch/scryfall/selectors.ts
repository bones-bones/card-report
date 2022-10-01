import type { RootState } from '../../store';

export const selectScryfallSet = (state: RootState) =>
    state.scryfallSet.set || [];
