import React from 'react';
import TodoItemList from "./TodoItemList";
import Form from "./Form";
import styles from './Todo.module.css';

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
        <div className={styles.todoContainer}>
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