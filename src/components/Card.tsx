import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import React from 'react';
import { CardEntry } from '../data-fetch';

export const Card = ({ card }: { card: CardEntry }) => (
    <Container>
        <Name>{card.name}</Name>
        <FlipCard hasBack={card.url_back !== ''}>
            <Image src={card.url} />
            {card.url_back !== '' && <BackImage src={card.url_back} />}
        </FlipCard>
        <WinRate>{(100 * card.win_rate).toPrecision(2)}%</WinRate>
    </Container>
);

const flipFront = keyframes({
    from: {},
    to: { transform: 'rotateY(180deg)' },
});

const FlipCard = styled.div(({ hasBack }: { hasBack: boolean }) => ({
    ...(hasBack && {
        ':hover': {
            animation: flipFront + ' 0.7s',
            animationFillMode: 'forwards',
        },
    }),
    transformStyle: 'preserve-3d',
    height: '220px',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
}));

const Container = styled.div({
    margin: '20px',
    backgroundColor: '',
    display: 'flex',
    flexDirection: 'column',
    height: '300px',
});
const Image = styled.img({
    top: '0px',
    height: '200px',

    backfaceVisibility: 'hidden',
    position: 'absolute',
});

const BackImage = styled.img({
    top: '0px',
    height: '200px',
    transform: 'rotateY(180deg)',
    backfaceVisibility: 'hidden',
    position: 'absolute',
});

const Name = styled.h3({
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    display: 'inline',
    textAlign: 'center',
});

const WinRate = styled.span({
    fontWeight: 'bold',
    fontSize: '20px',
    display: 'flex',
    justifyContent: 'center',
});
