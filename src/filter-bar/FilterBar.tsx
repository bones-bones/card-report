import styled from '@emotion/styled';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectActiveSet, selectPossibleFilters } from '../filters/selectors';
import Arrow from '../resources/arrow.svg';
import { filterThunk } from '../filters/filterThunk';

export const FilterBar = () => {
    const [open, setOpen] = useState(false);
    const possibleFilters = useSelector(selectPossibleFilters);
    const activeSet = useSelector(selectActiveSet);
    const dispatch = useDispatch();
    return (
        <>
            <Icon
                role="checkbox"
                onClick={() => {
                    setOpen(!open);
                }}
            >
                <IconImage src={Arrow} open={open} />
            </Icon>
            {open && (
                <Container>
                    {possibleFilters && (
                        <SetSelector>
                            <label htmlFor="setSelect">Select Set:</label>
                            <select
                                id="setSelect"
                                value={activeSet}
                                onChange={({ target: { value } }) => {
                                    console.log(value);
                                    dispatch(filterThunk({ expansion: value }));
                                }}
                            >
                                {possibleFilters.expansions.map((entry) => {
                                    return <option key={entry}>{entry}</option>;
                                })}
                            </select>
                        </SetSelector>
                    )}
                </Container>
            )}
        </>
    );
};

const SetSelector = styled.div();
const Icon = styled.div({
    position: 'fixed',
    height: '30px',
    width: '30px',
    backgroundImage: Arrow,
});
const Container = styled.div({
    height: '30px',
    display: 'flex',
    justifyContent: 'center',
});
const IconImage = styled.img(({ open }: { open: boolean }) => ({
    height: '100%',
    width: '100%',
    ...(open && { transform: 'rotate(90deg)' }),
}));
