import styled from '@emotion/styled';

import React from 'react';
import { CardEntry } from '../data-fetch';

export const Card = ({ card }: { card: CardEntry }) => (
    <Container>
        <Name>{card.name}</Name>
        <Image src={card.url} />
        <WinRate>{(100 * card.win_rate).toPrecision(2)}%</WinRate>
    </Container>
);

const Container = styled.div({
    margin: '20px',
    backgroundColor: '',
    display: 'flex',
    flexDirection: 'column',
});
const Image = styled.img({ width: '100%' });

const Name = styled.h3({
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    display: 'inline',
});

const WinRate = styled.span({
    fontWeight: 'bold',
    fontSize: '20px',
    display: 'flex',
    justifyContent: 'center',
});
