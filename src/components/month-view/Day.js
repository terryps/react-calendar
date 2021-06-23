import React from 'react';
import styled from 'styled-components';

const tdStyle = {
    height: '50px',
    width: '50px',
    border: '1px solid black',
}

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
    inline-size: 5em;
    block-size: 5em;
    padding: 0;
    border-right: 0.1em solid #000;
    border-top: 0.1em solid #000;
`;