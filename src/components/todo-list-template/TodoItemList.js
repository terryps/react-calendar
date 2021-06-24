import React from 'react';
import styled from 'styled-components';
import TodoItem from "./TodoItem";

const TodoItemList = (props) => {
    const {
        todos,
        onToggle,
        onRemove,
        value,
        onChange,
        onCreate,
    } = props;

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
                <input
                    value={value}
                    onChange={onChange}
                    onKeyPress={onCreate}
                />
            </div>
        </Div>
    );
}

export default TodoItemList;

const Div = styled.div`
    align-self: flex-start;
    grid-row: 2/3;
    padding: 0 1rem;
    
    input {
        margin: 0.9em 0 0;
        padding: 0;
        height: 2em;
        border: none;
        outline: none;
        background-color: #ddd;
    }
`;

const Title = styled.div`
    margin: 0;
    padding-block: 0 1em;
    border-bottom: .05em solid #000;
`;
