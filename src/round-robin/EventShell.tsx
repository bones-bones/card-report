import React, { useState } from 'react';
import { EventContext } from './EventContext';
import { PlayerMatchResult } from './types';

export const EventShell: React.FC = ({ children }) => {
    const [eventName, setEventName] = useState('');
    const [players, setPlayers] = useState<string[]>(
        JSON.parse(localStorage.getItem('players') || '[]')
    );
    const [matches, setMatches] = useState<
        { playerMatches: PlayerMatchResult[]; tie: number }[]
    >(JSON.parse(localStorage.getItem('matches') || '[]'));

    return (
        <EventContext.Provider
            value={{
                eventName,
                players,
                matches,
                addMatch: (entry: any) => {
                    localStorage.setItem(
                        'matches',
                        JSON.stringify(matches.concat(entry))
                    );

                    setMatches(matches.concat(entry));
                },
                addPlayer: (name: string) => {
                    localStorage.setItem(
                        'players',
                        JSON.stringify(players.concat(name))
                    );
                    setPlayers(players.concat(name));
                },
                removePlayer: (name: string) => {
                    const newPlayerList = players.filter(
                        (entry) => entry !== name
                    );
                    localStorage.setItem(
                        'players',
                        JSON.stringify(newPlayerList)
                    );

                    setPlayers(newPlayerList);
                },
                setEventName,
                removeMatch: (index: number) => {
                    const newMatchList = matches.filter((_, i) => i !== index);
                    localStorage.setItem(
                        'matches',
                        JSON.stringify(newMatchList)
                    );
                    setMatches(newMatchList);
                },
            }}
        >
            {children}
        </EventContext.Provider>
    );
};
