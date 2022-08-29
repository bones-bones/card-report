import styled from '@emotion/styled';
import React from 'react';
import { EventContext } from './EventContext';

export const Title = () => {
    return (
        <EventContext.Consumer>
            {({ eventName, setEventName }) => {
                return (
                    <StyledH1>
                        {eventName}
                        <StyledButton
                            onClick={() => {
                                const name =
                                    prompt('The name of the event') || '';
                                setEventName(name);
                            }}
                        >
                            ✎
                        </StyledButton>
                    </StyledH1>
                );
            }}
        </EventContext.Consumer>
    );
};

const StyledButton = styled.button({ border: 'none', background: 'none' });

const StyledH1 = styled.h1({
    fontSize: '100px',
    margin: '0px',
});
