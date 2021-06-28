import React from 'react';
import styled from 'styled-components';

const Form = (props) => {
    const {
        value,
        onChange,
        onKeyPress,
    } = props;
    return (
        <Input
            value={value}
            onChange={onChange}
            onKeyPress={onKeyPress}
        />
    );
}

export default Form;

const Input = styled.input`
    margin: 0.9em 0 0;
    padding: 0;
    height: 2em;
    border: none;
    outline: none;
    background-color: #ddd;
`;