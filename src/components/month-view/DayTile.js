import React, { Component } from 'react';
import styled from 'styled-components';

export default class DayTile extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        const len1 = this.props.todos.texts.length;
        const len2 = nextProps.todos.texts.length;
        if(len1 !== len2) {
            return true;
        }

        if(len1 && this.props.todos.texts.every((text, index) =>
            text.localeCompare(nextProps.todos.texts[index]))) {
            return true;
        }

        return false;
    }

    render() {
        const {
            todos,
            onClick,
        } = this.props;

        const day = todos.day;
        const textList = todos.texts.map(text =>
            <div>{text}</div>
        );

        return (
            <Td onClick={() => {onClick(day)}}>
                <span>{day}</span>
                { textList }
            </Td>
        )
    };
}

const Td = styled.td`
    inline-size: 6em;
    block-size: 6em;
    padding: 0;
    border-right: 0.1em solid #000;
    border-top: 0.1em solid #000;
    
    span {
        float: right;
        margin: .2em .2em 0 0;
    }
    
    div {
        inline-size: inherit;
        padding: .2em .1em;
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: no-wrap;
    }
`;