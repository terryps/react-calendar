import React from 'react';
import styled from 'styled-components';

const DayTile = (props) => {
    const {
        todos,
        onClick,
    } = props;

    const visibleNum = 4;
    const day = todos.date % 100;
    const textList = todos.texts.map((text, index) =>
        (index < visibleNum) ?
            <Text>{text}</Text> :
            <Text hide>{text}</Text>
    );

    return (
        <Tile onClick={() => {onClick(todos.date)}}>
            <span>{day}</span>
            {textList}
        </Tile>
    )
}

export default DayTile;

const Tile = styled.td`
    block-size: 6rem;
    padding: 0;
    border: 0.1rem solid #000;
    font: 0.8125rem inherit;
    
    vertical-align: top;
    position: relative;
    
    span {
        position: absolute;
        top: 0;
        right: 0;
        margin: .25em .4em 0 0;
    }
    
    &:hover div {
        animation: show .3s ease-in-out forwards;
        // &:nth-child(2) {animation-delay: .1s;}
        // &:nth-child(3) {animation-delay: .2s;}
    }
    
    @keyframes show {
        100% {
            font-weight: 500;
        }
    }
`;

const Text = styled.div`
    padding: 0 .5em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    
    ${props => props.hide && `
        max-block-size: 0;
    `}
    
    &:nth-child(2) {
        margin-top: 1.25rem;
    }
`;
