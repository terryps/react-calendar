import React from 'react';
import TodoItem from "./TodoItem";

const TodoListTemplate = (props) => {
    const {
        todos,
        onChange,
        onToggle,
        onRemove,
        onCreate,
    } = props;

    return (
        <div style={{margin: '1em 0', fontFamily: 'Roboto'}}>
            <div style={{margin:'0', paddingBottom:'0.5em', borderBottom:'1em #000'}}>
                <b>Todo</b>
            </div>
            <div>
                <TodoItem id="1" text="1" />
                <TodoItem id="2" text="2" />
                <TodoItem id="3" text="3" />
                <input
                    onChange={onChange}
                    onKeyPress={onCreate}
                />
            </div>
        </div>
    );
}

export default TodoListTemplate;
