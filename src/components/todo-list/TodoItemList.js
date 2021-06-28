import React, { Component } from 'react';
import styled from 'styled-components';
import TodoItem from "./TodoItem";

export default class TodoItemList extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        const len1 = this.props.todos.length;
        const len2 = nextProps.todos.length;
        if(len1 !== len2) {
            return true;
        }

        if(len1 && this.props.todos.every((todo, index) =>
            todo.text.localeCompare(nextProps.todos[index].text))) {
            return true;
        }

        return false;
    }

    render() {
        const {
            todos,
            onToggle,
            onRemove,
        } = this.props;

        const todoList = todos.map(
            (todo) => (
                <TodoItem
                    {...todo}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={todo.id}
                />
            )
        );

        return (
            <Div>
                <Title>
                    <b>Todos</b>
                </Title>
                <div>
                    { todoList }
                </div>
            </Div>
        );
    }
}

const Div = styled.div`
    max-inline-size: 10em;
`;

const Title = styled.div`
    margin: 0;
    padding-block: 0 1em;
    border-bottom: .05em solid #000;
`;
