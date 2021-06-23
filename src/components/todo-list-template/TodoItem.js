import React, { Component } from 'react';
import styled from 'styled-components'

export default class TodoItem extends Component {

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.todos !== nextProps.todos;
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
            <Div>
                <CheckBox
                     id={id}
                     checked={checked}
                     onClick={() => onToggle(id)}
                >
                    <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/>
                    </Svg>
                </CheckBox>
                <Text>{text}</Text>
                <RemoveButton className="remove"
                     onClick={() => onRemove(id)}>X</RemoveButton>
            </Div>
        );
    }
}

const Div = styled.div`
    display: flex;
    position: relative;
    margin: 0.75em 0 0;
`;

const Svg = styled.svg`
    display: block;
    position: absolute;
    top: calc(50% - 0.5em);
    left: 0.35em;
    max-inline-size: 0.8em;
    max-block-size: 0.95em;
    visibility: hidden;
`;

const CheckBox = styled.div`
    margin: 0.2em;
    cursor: pointer;
    padding: 0.2em;
    border: 0.1em solid #000;
    block-size: 0.5em;
    inline-size: 0.5em;
    
    svg {
        ${props => props.checked && `
            visibility: visible;
        `}
    }
`;

const Text = styled.div`
    line-height: 1.5;
`;

const RemoveButton = styled.div`
    line-height: 1.5;
`;