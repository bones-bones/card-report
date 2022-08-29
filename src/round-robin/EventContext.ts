import React from 'react';
import { PlayerMatchResult } from './types';

export const EventContext = React.createContext({
    addPlayer: (name: string) => {
        //
    },
    removePlayer: (name: string) => {
        //
    },
    addMatch: (results: {
        playerMatches: PlayerMatchResult[];
        tie: number;
    }) => {
        //
    },
    removeMatch: (index: number) => {
        //
    },
    setEventName: (eventName: string) => {
        //
    },
    players: [] as string[],
    eventName: '',
    matches: [] as { playerMatches: PlayerMatchResult[]; tie: number }[],
});
