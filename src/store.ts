import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { reducer as cardsReducer } from './cards';

export const store = configureStore({
    reducer: combineReducers({
        cards: cardsReducer,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

store.subscribe(() => {
    console.log(store.getState());
});
