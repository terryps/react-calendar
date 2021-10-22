import React, { Component } from 'react';
import { is } from 'immutable';
import styles from './Todo.module.css';
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
            <div className={styles.todoList}>
                <div className={styles.title}>
                    <span>Todos</span>
                    <span>{date}</span>
                </div>
                <div className={styles.listWrapper}>
                    { todoList }
                </div>
            </div>
        );
    }
}
