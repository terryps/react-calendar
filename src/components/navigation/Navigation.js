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
            <section>
                <button onClick={onClickPrev2}>&laquo;</button>
                <button onClick={onClickPrev}>&lsaquo;</button>
            </section>
            <section>
                <Month>{ monthList[m] }</Month>
                <Year>{ y }</Year>
            </section>
            <section>
                <button onClick={onClickNext}>&rsaquo;</button>
                <button onClick={onClickNext2}>&raquo;</button>
            </section>
        </Nav>
    );
}

export default Navigation;

const Nav = styled.div`
    grid-column: 1/2;
    
    display: flex;
    
    font-family: 'Exo';
    font-style: italic;
    font-weight: 900;
    text-align: center;
    
    section {
        align-self: center;
    }
    
    button {
        border: none;
        font-style: inherit;
        font-weight: inherit;
        font-size: 4em;
        background-color: green;
        cursor: pointer;
        
        &:hover {
            background-color: red;
        }
    }
`;

const Month = styled.div`
    display: inline-block;
    inline-size: 32rem;
    font-size: 5em;
    text-transform: uppercase;
`;

const Year = styled.div`
    display: inline-block;
    inline-size: 7rem;
    font-size: 3em;
`;