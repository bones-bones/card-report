import styled from '@emotion/styled';

export const Column = styled.div(
    ({ columnColor }: { columnColor: 'W' | 'U' | 'B' | 'R' | 'G' | '' }) => {
        return {
            backgroundColor: getColor(columnColor),
            width: '100%',
            height: '100%',
        };
    }
);

const getColor = (color: 'W' | 'U' | 'B' | 'R' | 'G' | '') => {
    switch (color) {
        case 'W':
            return 'WHITE';
        case 'U':
            return 'BLUE';
        case 'B':
            return 'BLACK';
        case 'R':
            return 'RED';
        case 'G':
            return 'GREEN';
        case '':
            return 'BROWN';
    }
};
