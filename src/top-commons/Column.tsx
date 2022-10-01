import styled from '@emotion/styled';

import { MTGColor, getColor } from '../colors';

export const Column = styled.div(
    ({ columnColor }: { columnColor: MTGColor }) => {
        return {
            backgroundColor: getColor(columnColor),
            width: 100 / 6 + 'vw',
            height: '100%',
        };
    }
);
