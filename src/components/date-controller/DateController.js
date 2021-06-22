import React from 'react';

const DateController = (props) => {
    const {
        y,
        m,
        handleIncrease,
        handleDecrease,
    } = props;

    const showPrevMonth = () => {
        handleDecrease();
    }

    const showNextMonth = () => {
        handleIncrease();
    }
    return (
        <div>
            <button onClick={showPrevMonth}>prev</button>
            <b>{ m+1 }</b>{ y }
            <button onClick={showNextMonth}>next</button>
        </div>
    );
}

export default DateController;