import React from 'react';
import styled from 'styled-components';
import TodoItem from "./TodoItem";

const TodoItemList = (props) => {
    const {
        todos,
        value,
        onToggle,
        onRemove,
        onChange,
        onKeyPress,
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
            { console.log('TodoItemList') }
            <Title>
                <b>Todos</b>
            </Title>
            <div>
                { todoList }
                <input
                    value={value}
                    onChange={onChange}
                    onKeyPress={onKeyPress}
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
    
    max-inline-size: 10em;
    
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
