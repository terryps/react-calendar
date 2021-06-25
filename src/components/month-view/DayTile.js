import React, { Component } from 'react';
import styled from 'styled-components';

export default class DayTile extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.day !== nextProps.day;
    }

    render() {
        const {
            day,
            onClick,
        } = this.props;

        return (
            <Td onClick={() => {onClick(day)}}>
                <span>{day}</span>
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