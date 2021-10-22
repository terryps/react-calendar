import React from 'react';
import styles from './Navigation.module.css';
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
        <div className={styles.nav}>
            <div className={`${styles.navItems} ${styles.btns}`}>
                <button onClick={onClickPrev2}>&laquo;</button>
                <button onClick={onClickPrev}>&lsaquo;</button>
            </div>
            <div className={styles.navItems}>
                <div className={styles.month}>{ monthList[m] }</div>
                <div className={styles.year}>{ y }</div>
            </div>
            <div className={`${styles.navItems} ${styles.btns}`}>
                <button onClick={onClickNext}>&rsaquo;</button>
                <button onClick={onClickNext2}>&raquo;</button>
            </div>
        </div>
    );
}

export default Navigation;