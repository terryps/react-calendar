import React from 'react';
import styled from 'styled-components';
import { ymdToNum } from "../../shared/utils";

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

    const y = parseInt(viewDate / 10000);
    const m = parseInt((viewDate % 10000) / 100);
    console.log(y, m);

    const onClickPrev = () => {
        const nextViewDate = ymdToNum(
            (m === 0) ? y - 1: y,
            (m === 0) ? 11 : m - 1,
            1
        );
        setViewDate(nextViewDate);
    }

    function onClickPrev2() {
        const nextViewDate = ymdToNum(y - 1, m, 1)
        setViewDate(nextViewDate);
    }

    function onClickNext() {
        const nextViewDate = ymdToNum(
            (m === 11) ? y + 1 : y,
            (m === 11) ? 0 : m + 1,
            1);
        setViewDate(nextViewDate);
    }

    function onClickNext2() {
        const nextViewDate = ymdToNum(y + 1, m, 1);
        setViewDate(nextViewDate);
    }

    return (
        <Nav>
            <button onClick={onClickPrev2}>&laquo;</button>
            <button onClick={onClickPrev}>&lsaquo;</button>
            <Month>{ monthList[m] }</Month>
            <Year>{ y }</Year>
            <button onClick={onClickNext}>&rsaquo;</button>
            <button onClick={onClickNext2}>&raquo;</button>
        </Nav>
    );
}

export default Navigation;

const Nav = styled.div`
    grid-column: 1/2;
    
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