import React from 'react';
import styles from './Todo.module.css';

const Form = (props) => {
    const {
        value,
        onChange,
        onKeyPress,
    } = props;

    return (
        <input
            className={styles.input}
            value={value}
            onChange={onChange}
            onKeyPress={onKeyPress}
        />
    );
}

export default Form;