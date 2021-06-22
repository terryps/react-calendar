import React from 'react';

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
        <td style={ tdStyle }>
            { date }
        </td>
    )
}

export default Day;