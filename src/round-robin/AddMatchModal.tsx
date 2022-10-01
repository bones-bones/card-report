import styled from '@emotion/styled';
import { Select } from '@workday/canvas-kit-preview-react/select';
import {
    PrimaryButton,
    TertiaryButton,
} from '@workday/canvas-kit-react/button';
import { Modal } from '@workday/canvas-kit-react/modal';
import React, { useState } from 'react';

import { EventContext } from './EventContext';
import { getEmojiForString } from './getEmojiForString';

export const AddMatchModal = () => {
    return (
        <StyledModal>
            <Modal.Target as={TertiaryButton}>Submit Match Result</Modal.Target>
            <Modal.Overlay>
                <Modal.Card width={'auto'}>
                    <Modal.CloseIcon aria-label="Close" />
                    <Modal.Heading>Submit Match</Modal.Heading>
                    <ModalContent />
                </Modal.Card>
            </Modal.Overlay>
        </StyledModal>
    );
};
const PlayerSelector = styled.div({
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
});

const ScoreContainer = styled.div();

const Container = styled.div({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
});

const WinLossPickers = styled(Select)({
    maxWidth: '10px',
});

const PlayerSelect = styled(Select)({ maxWidth: '200px' });

const StyledModal = styled(Modal)({ width: '80vw' });

const ModalContent = () => {
    const [p1, setP1] = useState('');
    const [p2, setP2] = useState('');
    const [score, setScore] = useState({ win1: '0', win2: '0', tie: '0' });

    return (
        <EventContext.Consumer>
            {({ players, addMatch }) => {
                return (
                    <Modal.Body>
                        <Container>
                            <PlayerSelector>
                                <PlayerSelect
                                    id="p1"
                                    value={p1}
                                    onChange={({ target: { value } }) => {
                                        setP1(value);
                                    }}
                                    options={[
                                        {
                                            label: 'Player 1',
                                            value: '',
                                            disabled: true,
                                        },
                                        ...players.map((entry) => {
                                            return {
                                                label:
                                                    getEmojiForString(entry) +
                                                    ' ' +
                                                    entry,
                                                value: entry,
                                            };
                                        }),
                                    ]}
                                />
                            </PlayerSelector>

                            <ScoreContainer>
                                <WinLossPickers
                                    options={['0', '1', '2']}
                                    value={score.win1}
                                    onChange={({ target: { value } }) => {
                                        setScore({ ...score, win1: value });
                                    }}
                                />
                                -
                                <WinLossPickers
                                    options={['0', '1', '2']}
                                    value={score.win2}
                                    onChange={({ target: { value } }) => {
                                        setScore({ ...score, win2: value });
                                    }}
                                />
                            </ScoreContainer>
                            <PlayerSelector>
                                <PlayerSelect
                                    id="p2"
                                    onChange={({ target: { value } }) => {
                                        setP2(value);
                                    }}
                                    options={[
                                        {
                                            label: 'Player 2',
                                            value: '',
                                            disabled: true,
                                        },
                                        ...players.map((entry) => {
                                            return {
                                                label:
                                                    getEmojiForString(entry) +
                                                    ' ' +
                                                    entry,
                                                value: entry,
                                            };
                                        }),
                                    ]}
                                    value={p2}
                                />
                            </PlayerSelector>

                            <label htmlFor="ties">Tie(s)</label>
                            <WinLossPickers
                                id="ties"
                                options={['0', '1', '2', '3']}
                                value={score.tie}
                                onChange={({ target: { value } }) => {
                                    setScore({ ...score, tie: value });
                                }}
                            />
                        </Container>
                        <Modal.CloseButton
                            as={PrimaryButton}
                            onClick={() => {
                                if (
                                    p1 !== '' &&
                                    p2 !== '' &&
                                    parseInt(score.win1) +
                                        parseInt(score.win2) +
                                        parseInt(score.tie) >=
                                        2 &&
                                    parseInt(score.win1) +
                                        parseInt(score.win2) +
                                        parseInt(score.tie) <=
                                        6
                                ) {
                                    addMatch({
                                        tie: parseInt(score.tie),
                                        playerMatches: [
                                            {
                                                playerName: p1,
                                                win: parseInt(score.win1),
                                            },
                                            {
                                                playerName: p2,
                                                win: parseInt(score.win2),
                                            },
                                        ],
                                    });
                                } else {
                                    return false;
                                }
                            }}
                        >
                            Submit
                        </Modal.CloseButton>
                    </Modal.Body>
                );
            }}
        </EventContext.Consumer>
    );
};
