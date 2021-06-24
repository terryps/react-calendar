import React from 'react';
import styled from 'styled-components';

const Day = (props) => {
    const {
        date,
        // currentMonthIndex,
    } = props;

    return (
        <Td>{ date }</Td>
    )
}

export default Day;

const Td = styled.td`
    inline-size: 6em;
    block-size: 6em;
    padding: 0;
    border-right: 0.1em solid #000;
    border-top: 0.1em solid #000;
`;