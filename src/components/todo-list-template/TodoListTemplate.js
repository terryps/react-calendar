import React from 'react';
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
        <div>
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
        </div>
    );
}

export default TodoListTemplate;