import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { reducer as cardsReducer } from './cards';
import { reducer as filterReducer } from './filters/reducer';

export const store = configureStore({
    reducer: combineReducers({
        cards: cardsReducer,
        filters: filterReducer,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

store.subscribe(() => {
    console.log(store.getState());
});
