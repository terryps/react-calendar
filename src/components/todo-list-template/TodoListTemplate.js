import React from 'react';
import styled from 'styled-components';
import TodoItemList from "./TodoItemList";
import Form from "./Form";

const TodoListTemplate = (props) => {
    const {
        todos,
        selectedDate,
        value,
        onChange,
        onKeyPress,
        onToggle,
        onRemove,
    } = props;

    return (
        <Div>
            <TodoItemList
                todos={todos}
                selectedDate={selectedDate}
                onToggle={onToggle}
                onRemove={onRemove}
            />
            <Form
                value={value}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
        </Div>
    );
}

export default TodoListTemplate;

const Div = styled.div`
    align-self: flex-start;
    grid-row: 2/3;
    padding: 0 1rem;
`;