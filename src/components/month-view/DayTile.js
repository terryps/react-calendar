import React from 'react';
import styles from './DayTile.module.css';

const DayTile = (props) => {
    const {
        selected,
        todos,
        onClick,
    } = props;

    const day = todos.date % 100;

    return (
        <td className={styles.tile} onClick={() => {onClick(todos.date)}}>
            <span className={`${selected&&styles.selected} ${styles.span}`}>
                {day}
            </span>
            <div className={styles.texts}>
                {todos.details.map((detail, index) =>
                    <p key={index} className={`${styles.p} ${detail.done&&styles.done}`}>
                        {detail.text}
                    </p>
                )}
            </div>
        </td>
    )
}

export default DayTile;