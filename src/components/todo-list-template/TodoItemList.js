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
            todo.text.localeCompare(nextProps.todos[index].text) ||
            todo.check !== nextProps.todos[index].checked)
        ) {
            return true;
        }

        return false;
    }

    render() {
        const {
            todos,
            selectedDate,
            onToggle,
            onRemove,
        } = this.props;

        const y = parseInt(selectedDate / 10000);
        const m = parseInt(selectedDate % 10000 / 100);
        const d = selectedDate % 100;
        const date = `${m}.${d}.${y}`;

        const todoList = todos.map(
            (todo) => (
                <TodoItem
                    key={todo.id}
                    {...todo}
                    onToggle={onToggle}
                    onRemove={onRemove}
                />
            )
        );

        return (
            <Div>
                <Title>
                    <b>Todos</b>
                    {date}
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
