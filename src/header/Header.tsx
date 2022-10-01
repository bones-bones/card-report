import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../resources/logo.svg';

export const Header = () => {
    return (
        <H2>
            <StyledLink to={''}>
                <LogoImage src={Logo} />
                CARD REPORT
            </StyledLink>
        </H2>
    );
};

const H2 = styled.h2({
    marginTop: '5px',
    marginBottom: '0px',
});

const contrastSaturateString = 'contrast(1.5) saturate(7);';
const hueKeyframes = keyframes({
    '0%, 100%': {
        filter: ' invert(0%) ' + contrastSaturateString,
    },
    '50% ': {
        filter: ' invert(90%) ' + contrastSaturateString,
    },
});
const LogoImage = styled.img({
    animation: `${hueKeyframes}  6s infinite`,
    width: '45px',
    padding: '5px',
});

const StyledLink = styled(Link)({
    display: 'flex',
    alignItems: 'center',
    color: 'inherit',
    textDecoration: 'inherit',
    '&:hover': { textDecoration: 'underline' },
});
