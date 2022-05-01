import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCards } from '../cards';
import { getColor, MTGColor } from '../colors';
import { Card } from '../components';
import { AVERAGE_17_LANDS_WIN_RATE } from '../constants';
import { CardEntry } from '../data-fetch';
import { FilterBar } from '../filter-bar';
import { listOfRemoval } from './listOfRemoval';

export const RemovalRankings = () => {
    const cards = useSelector(selectCards);
    const [activeCard, setActiveCard] = useState<CardEntry | null>(null);
    const filteredCards = cards.filter((entry) =>
        listOfRemoval.includes(entry.name)
    );
    const sortedCards = filteredCards.sort((card1, card2) => {
        return card2.win_rate - card1.win_rate;
    });
    return (
        <>
            <FilterBar />
            <Container>
                <RowContainer>
                    <thead>
                        <tr>
                            <th>color</th> <th>name</th> <th>win rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedCards.map((entry) => {
                            const winRate =
                                100 * entry.win_rate -
                                AVERAGE_17_LANDS_WIN_RATE;
                            return (
                                <CardRow
                                    key={entry.name}
                                    onClick={() => {
                                        setActiveCard(entry);
                                    }}
                                >
                                    <td>
                                        <ColorBar>
                                            {entry.color
                                                .split('')
                                                .map((cardColor) => {
                                                    const color = getColor(
                                                        cardColor as MTGColor
                                                    );
                                                    return (
                                                        <Pip
                                                            key={color}
                                                            color={color}
                                                        />
                                                    );
                                                })}
                                        </ColorBar>
                                    </td>
                                    <Name>{entry.name}</Name>
                                    <WinRate>
                                        {winRate > 0 ? '+' : ''}{' '}
                                        {winRate.toPrecision(3)}
                                    </WinRate>
                                </CardRow>
                            );
                        })}
                    </tbody>
                </RowContainer>
                {activeCard && (
                    <CardHolder
                        onClick={() => {
                            setActiveCard(null);
                        }}
                    >
                        <Card card={activeCard} />
                    </CardHolder>
                )}
            </Container>
        </>
    );
};

const Container = styled.div({});
const CardHolder = styled.div({
    borderRadius: '15px',
    backgroundColor: 'BEIGE',
    width: '250px',
    border: '1px solid black',
    height: '350px',
    position: 'fixed',
    top: '10%',
    right: '30%',
});
const WinRate = styled.td();
const ColorBar = styled.div({ display: 'flex', flexDirection: 'row' });
const Name = styled.td();
const RowContainer = styled.table({
    paddingTop: '25px',
    display: 'flex',
    flexDirection: 'column',
    margins: '0px',
});

const CardRow = styled.tr({
    cursor: 'pointer',
    borderBottom: '1px solid black',
});
const Pip = styled.div(({ color }: { color: string }) => ({
    backgroundColor: color,
    height: '20px',
    width: '20px',
    borderRadius: '10px',
}));
