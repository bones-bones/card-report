import { Pill } from '@workday/canvas-kit-preview-react/pill';
import React from 'react';
import { EventContext } from './EventContext';
import { Menu } from '@workday/canvas-kit-react/menu';
import { getEmojiForString } from './getEmojiForString';

export const PlayerPill: React.FC<{ children: string }> = ({ children }) => {
    return (
        <EventContext.Consumer>
            {({ matches, players }) => {
                const currentPlayer = children;

                const stillNeedToPlay = players.filter((entry) => {
                    return (
                        entry != currentPlayer &&
                        !matches.some((match) => {
                            const participants = [
                                match.playerMatches[0].playerName,
                                match.playerMatches[1].playerName,
                            ];
                            return (
                                participants.includes(
                                    currentPlayer as string
                                ) && participants.includes(entry as string)
                            );
                        })
                    );
                });

                return (
                    <>
                        <Menu>
                            <Menu.Target as={Pill}>
                                <h2>
                                    {getEmojiForString(children) +
                                        ' ' +
                                        children.substring(0, 16)}{' '}
                                </h2>
                            </Menu.Target>
                            <Menu.Popper>
                                <Menu.Card>
                                    <Menu.List>
                                        {stillNeedToPlay.map((entry) => (
                                            <Menu.Item key={entry}>
                                                {entry}
                                            </Menu.Item>
                                        ))}
                                    </Menu.List>
                                </Menu.Card>
                            </Menu.Popper>
                        </Menu>
                    </>
                );
            }}
        </EventContext.Consumer>
    );
};
