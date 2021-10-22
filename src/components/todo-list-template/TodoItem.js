import React, { Component } from 'react';
import styles from './Todo.module.css';

export default class TodoItem extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.checked !== nextProps.checked;
    }

    render() {
        const {
            id,
            text,
            checked,
            onToggle,
            onRemove,
        } = this.props;

        return (
            <div className={styles.todoItem}>
                <div className={styles.checkbox}
                     id={id}
                     checked={checked}
                     onClick={() => {onToggle(id)}}
                >
                    <svg
                        className={`${styles.svg} ${checked&&styles.checked}`}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24"
                        viewBox="0 0 24 24">
                        <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/>
                    </svg>
                </div>
                <div className={styles.text}>{text}</div>
                <div className={styles.delete} onClick={() => onRemove(id)}>X</div>
            </div>
        );
    }
}