import { EventContext } from './EventContext';
import React from 'react';
import { Table, TableRow } from '@workday/canvas-kit-react/table';

import { PlayerPill } from './PlayerPill';

export const Ranking = () => {
    return (
        <EventContext.Consumer>
            {({ matches, players }) => {
                const scoredPlayers = players.reduce((prev, entry) => {
                    return { ...prev, [entry]: 1000 };
                }, {} as { [key: string]: number });

                matches.forEach((entry) => {
                    const totalGames =
                        entry.playerMatches[0].win +
                        entry.playerMatches[1].win +
                        entry.tie;

                    const p1Name = entry.playerMatches[0].playerName;
                    const p2Name = entry.playerMatches[1].playerName;
                    const p1Elo = scoredPlayers[p1Name];
                    const p2Elo = scoredPlayers[p2Name];

                    const p1Up = (p2Elo + 40) * entry.playerMatches[0].win;
                    const p1Down = (p2Elo - 40) * entry.playerMatches[1].win;
                    const p1Tie = p2Elo * entry.tie;

                    const p2Up = (p1Elo + 40) * entry.playerMatches[1].win;
                    const p2Down = (p1Elo - 40) * entry.playerMatches[0].win;
                    const p2Tie = p1Elo * entry.tie;

                    scoredPlayers[p1Name] =
                        (p1Up + p1Down + p1Tie) / totalGames;

                    scoredPlayers[p2Name] =
                        (p2Up + p2Down + p2Tie) / totalGames;
                });

                const sortedPlayers = Object.entries(scoredPlayers).map(
                    ([player, score]) => {
                        return { player, score: Math.floor(score) };
                    }
                );
                sortedPlayers.sort(
                    ({ score: score1 }, { score: score2 }) => score1 - score2
                );
                sortedPlayers.reverse();

                return (
                    <div>
                        <h2>Rankings</h2>
                        <Table>
                            <thead>
                                <TableRow>
                                    <th>
                                        <h2>Rank</h2>
                                    </th>
                                    <th>
                                        <h2>Player</h2>
                                    </th>
                                    <th>
                                        <h2>Elo</h2>
                                    </th>
                                </TableRow>
                            </thead>
                            <tbody>
                                {sortedPlayers.map((entry, i) => {
                                    return (
                                        <TableRow key={i}>
                                            <td>
                                                <h3>{i + 1}</h3>
                                            </td>
                                            <td>
                                                <PlayerPill>
                                                    {entry.player}
                                                </PlayerPill>
                                            </td>
                                            <td>
                                                <h3>{entry.score}</h3>
                                            </td>
                                        </TableRow>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </div>
                );
            }}
        </EventContext.Consumer>
    );
};
