import styled from '@emotion/styled';

import React from 'react';
import { useSelector } from 'react-redux';
import { selectCards } from '../cards';
import { Card } from '../components';
import { CardEntry } from '../data-fetch';
import { Column } from './Column';
import { FilterBar } from '../filter-bar';

export const TopCommons = () => {
    const cards = useSelector(selectCards);

    const commons = cards.filter(
        ({ rarity }) => rarity === 'common' || rarity === 'uncommon'
    );

    const sortedCommons = commons.sort((card1, card2) => {
        return card2.win_rate - card1.win_rate;
    });

    const reducedCommons = sortedCommons.reduce((existing, newValue) => {
        if (!existing[newValue.color]) {
            existing[newValue.color] = [];
        }
        existing[newValue.color].push(newValue);
        return existing;
    }, {} as Record<CardEntry['color'], CardEntry[]>);

    return (
        <>
            <FilterBar />
            <ColumnContainer>
                {(
                    ['W', 'U', 'B', 'R', 'G', ''] as (
                        | 'W'
                        | 'U'
                        | 'B'
                        | 'R'
                        | 'G'
                        | ''
                    )[]
                ).map((entry) => {
                    return (
                        <Column key={entry} columnColor={entry}>
                            {reducedCommons[entry].slice(0, 10).map((card) => (
                                <Card key={card.name} card={card} />
                            ))}
                        </Column>
                    );
                })}
            </ColumnContainer>
        </>
    );
};

const ColumnContainer = styled.div({
    display: 'flex',
    //   flexDirection: 'column',
    margins: '0px',
});
