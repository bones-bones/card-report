import { EventContext } from './EventContext';
import React from 'react';
import styled from '@emotion/styled';
import { TertiaryButton } from '@workday/canvas-kit-react/button';
import { PlayerPill } from './PlayerPill';
import { trashIcon } from '@workday/canvas-system-icons-web';
export const Players = () => {
    return (
        <EventContext.Consumer>
            {({ addPlayer, players, removePlayer }) => {
                return (
                    <div>
                        <h2>Players</h2>
                        {players.length < 8 && (
                            <TertiaryButton
                                onClick={() => {
                                    const name =
                                        prompt('enter player name') || '';
                                    if (name !== '') {
                                        addPlayer(name);
                                    }
                                }}
                            >
                                Add Player
                            </TertiaryButton>
                        )}
                        <StyledList>
                            {players.map((entry) => {
                                return (
                                    <StyledItem key={entry}>
                                        <PlayerPill>{entry}</PlayerPill>{' '}
                                        <TertiaryButton
                                            icon={trashIcon}
                                            onClick={() => {
                                                removePlayer(entry);
                                            }}
                                        />
                                    </StyledItem>
                                );
                            })}
                        </StyledList>
                    </div>
                );
            }}
        </EventContext.Consumer>
    );
};

const StyledList = styled.ul({ listStyle: 'none', paddingLeft: '0px' });

const StyledItem = styled.li({
    padding: '10px',
});
