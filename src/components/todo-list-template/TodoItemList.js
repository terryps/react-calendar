import React, { Component } from 'react';
import { is } from 'immutable';
import styled from 'styled-components';
import TodoItem from "./TodoItem";

export default class TodoItemList extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return !is(this.todos, nextProps.todos);
    }

    render() {
        const {
            todos,
            selectedDate,
            // onToggle,
            // onRemove,
        } = this.props;

        const y = parseInt(selectedDate / 10000);
        const m = parseInt(selectedDate % 10000 / 100);
        const d = selectedDate % 100;
        const date = `${m}.${d}.${y}`;

        const todoList = todos.map(
            (todo) => {
                const {id, date, text, checked} = todo.toJS();
                return (date === selectedDate) && (
                    <TodoItem
                        key={id}
                        id={id}
                        text={text}
                        checked={checked}
                        // onToggle={onToggle}
                        // onRemove={onRemove}
                    />
                )
            }
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
