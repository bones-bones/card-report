import styled from '@emotion/styled';

import React from 'react';
import { CardEntry } from '../data-fetch';

export const Card = ({ card }: { card: CardEntry }) => (
    <Container>
        <h3>{card.name}</h3>
        <Image src={card.url} />
        <h4>{card.win_rate.toPrecision(2)}</h4>
    </Container>
);

const Container = styled.div({ margin: '20px', backgroundColor: '' });
const Image = styled.img({ width: '100%' });
