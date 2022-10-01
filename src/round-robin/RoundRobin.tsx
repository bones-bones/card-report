import styled from '@emotion/styled';
import { Card } from '@workday/canvas-kit-react/card';
import { Layout } from '@workday/canvas-kit-react/layout';
import React from 'react';

import { EventShell } from './EventShell';
import { Matches } from './Matches';
import bgImage from './Pacifica.webp';
import { Players } from './Players';
import { Ranking } from './Ranking';
import { Title } from './Title';

export const RoundRobin = () => {
    return (
        <EventShell>
            <OuterContainer>
                <Layout>
                    <StyledLayoutColumn>
                        <Card>
                            <Title />
                        </Card>
                    </StyledLayoutColumn>
                </Layout>
                <Container>
                    <Layout>
                        <Layout.Column columns={3}>
                            <Card>
                                <Players />
                            </Card>
                        </Layout.Column>
                        <Layout.Column columns={5}>
                            <Card>
                                <Matches />
                            </Card>
                        </Layout.Column>
                        <Layout.Column columns={4}>
                            <Card>
                                <Ranking />
                            </Card>
                        </Layout.Column>
                    </Layout>
                </Container>
            </OuterContainer>
        </EventShell>
    );
};

const Container = styled.div({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: '20px',
});

const StyledLayoutColumn = styled(Layout.Column)({ paddingTop: '10px' });

const OuterContainer = styled('div')({
    backgroundImage: 'url(' + bgImage + ')',
    backgroundRepeat: 'repeat-y',
    backgroundSize: '100%',
    height: 'auto',
    minHeight: '100vh',
});
