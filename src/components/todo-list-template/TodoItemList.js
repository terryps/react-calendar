import React, { Component } from 'react';
import TodoItem from "./TodoItem";
import styled from "styled-components";

export default class TodoItemList extends Component {
    render() {
        const {
            todos,
            onChange,
            onToggle,
            onRemove,
            onCreate,
        } = this.props;

        return (
            <Div>
                <TodoItem id="1" text="1" />
                <TodoItem id="2" text="2" />
                <TodoItem id="3" text="3" />
                <input
                    onChange={onChange}
                    onKeyPress={onCreate}
                />
            </Div>
        );
    }
}

const Div = styled.div`
    
`;