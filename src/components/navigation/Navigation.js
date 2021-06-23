import React from 'react';
import styled from 'styled-components';

const Navigation = (props) => {
    const {
        viewDate,
        setViewDate,
    } = props;

    const monthList = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const y = viewDate.year;
    const m = viewDate.month;

    const onClickPrev = () => {
        const nextViewDate = {
            year: (m === 0) ? y - 1: y,
            month: (m === 0) ? 11 : m - 1,
        }
        setViewDate(nextViewDate);
    }

    function onClickPrev2() {
        const nextViewDate = {
            year: y - 1,
            month: m,
        }
        setViewDate(nextViewDate);
    }

    function onClickNext() {
        const nextViewDate = {
            year: (m === 11) ? y + 1 : y,
            month: (m === 11) ? 0 : m + 1,
        }
        setViewDate(nextViewDate);
    }

    function onClickNext2() {
        const nextViewDate = {
            year: y + 1,
            month: m,
        }
        setViewDate(nextViewDate);
    }

    return (
        <Nav>
            <button onClick={onClickPrev2}>&laquo;</button>
            <button onClick={onClickPrev}>&lsaquo;</button>
            <Month>{ monthList[viewDate.month] }</Month>
            <Year>{ viewDate.year }</Year>
            <button onClick={onClickNext}>&rsaquo;</button>
            <button onClick={onClickNext2}>&raquo;</button>
        </Nav>
    );
}

export default Navigation;

const Nav = styled.div`
    font-family: 'Exo';
    font-style: italic;
    font-weight: 900;
    
    div {
        display: inline;
        margin: 0 1rem;
    }
    
    button {
        border: none;
        font-style: italic;
        font-weight: 900;
        font-size: 3.2rem;
        background-color: #fff;
        
        &:hover {
            background-color: red;
        }
    }
`;

const Month = styled.div`
    font-size: 5em;
    text-transform: uppercase;
`;
const Year = styled.div`
    font-size: 3em;
`;