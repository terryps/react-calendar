import React from 'react';
import styled from 'styled-components';
import { ymdToNum } from "shared/utils";

const Navigation = ({viewDate, setViewDate}) => {
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

    const onClickPrev = () => {
        const nextViewDate = ymdToNum(
            (m === 0) ? y - 1: y,
            (m === 0) ? 11 : m - 1,
            1
        );
        setViewDate(nextViewDate);
    }

    const onClickPrev2 = () => {
        const nextViewDate = ymdToNum(y - 1, m, 1);
        setViewDate(nextViewDate);
    }

    const onClickNext = () => {
        const nextViewDate = ymdToNum(
            (m === 11) ? y + 1 : y,
            (m === 11) ? 0 : m + 1,
            1);
        setViewDate(nextViewDate);
    }

    const onClickNext2 = () => {
        const nextViewDate = ymdToNum(y + 1, m, 1);
        setViewDate(nextViewDate);
    }

    return (
        <Nav>
            <div>
                <button onClick={onClickPrev2}><span>&laquo;</span></button>
                <button onClick={onClickPrev}><span>&lsaquo;</span></button>
            </div>
            <div>
                <Month>{ monthList[m] }</Month>
                <Year>{ y }</Year>
            </div>
            <div>
                <button onClick={onClickNext}>&rsaquo;</button>
                <button onClick={onClickNext2}>&raquo;</button>
            </div>
        </Nav>
    );
}

export default Navigation;

const Nav = styled.div`
    display: flex;
    font-family: 'Exo';
    font-style: italic;
    font-weight: 900;
    text-align: center;
    
    grid-column: 1/2;
    justify-self: stretch;
    justify-content: space-between;
    
    & > div {
        align-self: center;
    }
    
    button {
        inline-size: 1em;
        border: none;
        background-color: #fff;
        font-style: inherit;
        font-weight: inherit;
        font-size: 4rem;
        cursor: pointer;
        
        &:hover {
            background-color: #ccc;
        }
        
        span {
            position: relative;
            left: -0.1em;
        }
    }
`;

const Month = styled.div`
    display: inline-block;
    padding: 0 .1em;
    font-size: 5rem;
    text-transform: uppercase;
`;

const Year = styled.div`
    display: inline-block;
    padding: 0 .1em;
    font-size: 3rem;
`;