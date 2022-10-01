import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

type DirectoryEntryProps = {
    path: string;
    description: JSX.Element;
    title: string;
};

const Description = styled.div();

const entries: DirectoryEntryProps[] = [
    {
        path: '/commonsAndUncommons',
        description: (
            <Description>
                Displays the top 5 limited commons and uncommons for each of the
                5 colors + colorless
            </Description>
        ),
        title: 'Commons and Uncommons',
    },
    {
        path: '/isRemovalBadActually',
        description: (
            <Description>
                Streets of New Capenna was so poorly balanced that it seemed
                relevant to compare if premium removal was worse than your
                average common or uncommon. It turns out, yes, removal is bad
                actually
            </Description>
        ),
        title: 'Is Removal Bad Actually? (SNC only)',
    },
    {
        path: '/roundRobin',
        description: (
            <Description>
                A simple round robin app made for a mini tournament on Treasure
                Island.{' '}
                <a href="https://twitter.com/bonesdashbones/status/1564109261222735872/photo/1">
                    See also
                </a>
            </Description>
        ),
        title: 'Round Robin Tournament Tracker',
    },
    {
        path: '/keywords',
        description: (
            <Description>
                Groups all the cards in a set by keywords, then returns the top
                5 for each keyword.
            </Description>
        ),
        title: 'Card Win Rates by Keyword',
    },
];

export const SplashPage = () => {
    return (
        <>
            <Manifesto>
                This is variety of MTG projects. Written in some front-end
                language. All the numbers come from 17lands.
            </Manifesto>

            <List>
                {entries.map((entry) => (
                    <Entry
                        key={entry.title}
                        path={entry.path}
                        description={entry.description}
                        title={entry.title}
                    />
                ))}
            </List>
        </>
    );
};

const Manifesto = styled.div();

const List = styled.ol();

const Entry = (props: DirectoryEntryProps) => {
    return (
        <EntryCard>
            <Link to={props.path}>
                <h2>{props.title}</h2>
            </Link>
            {props.description}
        </EntryCard>
    );
};

const EntryCard = styled.div();
