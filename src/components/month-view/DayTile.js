import React from 'react';
import styled from 'styled-components';

const DayTile = (props) => {
    const {
        selected,
        todos,
        onClick,
    } = props;

    const visibleNum = 6;
    const day = todos.date % 100;
    const textList = todos.texts.map((text, index) =>
        (index < visibleNum) ?
            <div>{text}</div> :
            <Hide>{text}</Hide>
    );

    return (
        <Tile onClick={() => {onClick(todos.date)}}>
            <Span selected={selected}>{day}</Span>
            {textList}
        </Tile>
    )
}

export default DayTile;

const Tile = styled.td`
    block-size: 6.05rem;
    padding: 0;
    border: 0.1rem solid #000;
    
    vertical-align: top;
    position: relative;
    
    span {
        position: absolute;
        top: 0;
        right: 0;
        margin: .25em .4em 0 0;
        padding: 0 .25em;
        font: 0.8125rem inherit;
    }
    
    div {
        padding: 0 .5rem;
        overflow: hidden;
        font-size: 0.75rem;
        text-overflow: ellipsis;
        white-space: nowrap;
        transition: .3s ease-in-out;
        
        &:nth-child(2) {
            margin-top: 1.25rem;
        }
    }
`;

const Span = styled.span`
    ${({selected}) => selected && `
        background-color: blue;
        color: #fff;
    `}
`;

const Hide = styled.div`
    max-block-size: 0;
    opacity: 0;
    
    ${Tile}:hover & {
        max-block-size: 1em;
        opacity: 1;
    }
`;
