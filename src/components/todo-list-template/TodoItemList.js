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
            onToggle,
            onRemove,
        } = this.props;

        const y = parseInt(selectedDate / 10000);
        const m = parseInt(selectedDate % 10000 / 100) + 1;
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
                        onToggle={onToggle}
                        onRemove={onRemove}
                    />
                )
            }
        );

        return (
            <Div>
                <Title>
                    <span>Todos</span>
                    <span>{date}</span>
                </Title>
                <TodosWrapper>
                    { todoList }
                </TodosWrapper>
            </Div>
        );
    }
}

const Div = styled.div`
    max-inline-size: 10em;
`;

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding-bottom: .525rem;
    border-bottom: .05em solid #000;
    
    span {
        font-weight: 600;
    }
`;

const TodosWrapper = styled.div`
    max-block-size: 30rem;
    overflow: auto;
`;