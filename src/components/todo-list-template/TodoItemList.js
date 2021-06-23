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
        <TodoWrapper>
            <Title>
                <b>Todos</b>
            </Title>
            <div>
                { todoList }
                <Input
                    value={value}
                    onChange={onChange}
                    onKeyPress={onCreate}
                />
            </div>
        </TodoWrapper>
    );
}

export default TodoItemList;

const TodoWrapper = styled.div``;

const Title = styled.div`
    margin: 0;
    padding-bottom: 0.5em;
    border-bottom: .05em solid #000;
`;

const Input = styled.input`
    margin: 0.9em 0 0;
    padding: 0;
    height: 2em;
    border: none;
    outline: none;
    background-color: #ddd;
`;