import { TertiaryButton } from '@workday/canvas-kit-react/button';
import { Table, TableRow } from '@workday/canvas-kit-react/table';
import { trashIcon } from '@workday/canvas-system-icons-web';
import React from 'react';

import { AddMatchModal } from './AddMatchModal';
import { EventContext } from './EventContext';
import { PlayerPill } from './PlayerPill';

export const Matches = () => {
    return (
        <EventContext.Consumer>
            {({ matches, players, removeMatch }) => {
                return (
                    <div>
                        <h2>
                            Matches ({matches.length}/
                            {factorialize(players.length)})
                        </h2>
                        <AddMatchModal />
                        <Table>
                            <thead>
                                <TableRow>
                                    <th>
                                        <h2>P1</h2>
                                    </th>
                                    <th>
                                        <h2>P2</h2>
                                    </th>
                                    <th>
                                        <h2>Result</h2>
                                    </th>
                                </TableRow>
                            </thead>
                            <tbody>
                                {matches.map(({ playerMatches, tie }, i) => {
                                    return (
                                        <TableRow key={i}>
                                            <td>
                                                <PlayerPill>
                                                    {
                                                        playerMatches[0]
                                                            .playerName
                                                    }
                                                </PlayerPill>
                                            </td>
                                            <td>
                                                <PlayerPill>
                                                    {
                                                        playerMatches[1]
                                                            .playerName
                                                    }
                                                </PlayerPill>
                                            </td>
                                            <td>
                                                <h3>
                                                    {playerMatches[0].win} -{' '}
                                                    {playerMatches[1].win}{' '}
                                                    {tie > 0 && ` - ${tie}`}{' '}
                                                    <TertiaryButton
                                                        icon={trashIcon}
                                                        onClick={() => {
                                                            removeMatch(i);
                                                        }}
                                                    />
                                                </h3>
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

const factorialize = (value: number) => {
    let iterateNumber = value - 1;
    let outputValue = 0;

    while (iterateNumber > 0) {
        outputValue += iterateNumber;
        iterateNumber--;
    }
    return outputValue;
};
