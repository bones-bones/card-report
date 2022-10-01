import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectCards } from '../cards';
import { Card } from '../components';
import { CardEntry } from '../data-fetch';
import { mapByKeyword } from '../data-fetch/scryfall';
import { selectScryfallSet } from '../data-fetch/scryfall/selectors';
import { FilterBar } from '../filter-bar';
import { stringToColor } from './stringToColor';

export const Keywords = () => {
    const selectedSet = useSelector(selectScryfallSet);
    const setAsKeywords = mapByKeyword(selectedSet);
    const cards = useSelector(selectCards);

    useState();

    return (
        <>
            <span>
                Powered by data from
                <a href={'https://www.17lands.com/'}>17Lands</a>
            </span>{' '}
            -{' '}
            <span>
                <a href={'https://github.com/bones-bones/card-report'}>
                    code is here
                </a>
            </span>
            <FilterBar />
            <ColumnContainer>
                {Object.entries(setAsKeywords).map(([key, values]) => {
                    const theArray: CardEntry[] = values.map(
                        (entry) =>
                            cards.find((cardEntry) => {
                                return (
                                    entry.name.includes(cardEntry.name) ||
                                    cardEntry.name.includes(entry.name)
                                );
                            })!
                    );

                    const sortedCommons = theArray.sort((card1, card2) => {
                        return card2.win_rate - card1.win_rate;
                    });
                    const limitedArray = sortedCommons.slice(0, 5);
                    //  console.log(sortedCommons, key);
                    return (
                        <>
                            <Column backgroundColor={stringToColor(key)}>
                                <h2>{key}</h2>
                                {limitedArray.map((cardEntry) =>
                                    cardEntry ? (
                                        <Card
                                            card={cardEntry}
                                            key={cardEntry.name}
                                        />
                                    ) : (
                                        <></>
                                    )
                                )}
                            </Column>
                        </>
                    );
                })}
            </ColumnContainer>
        </>
    );
};
const ColumnContainer = styled.div({
    display: 'flex',
    margins: '0px',
});

const Column = styled.div(
    ({ backgroundColor }: { backgroundColor: string }) => ({
        backgroundColor,
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
    })
);
