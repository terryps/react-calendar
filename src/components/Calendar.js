import React from 'react';
import styles from './Calendar.module.css';
import Navigation from "components/navigation/Navigation";
import MonthView from "components/month-view/MonthView"
import TodoListTemplate from "components/todo-list-template/TodoListTemplate";

const Calendar = (props) => {
    const {
        input,
        viewDate,
        selectedDate,
        todos,
        onChangeViewDate,
        onClickTile,
        onChangeInput,
        onKeyPress,
        onToggle,
        onRemove,
    } = props;

    return (
        <div className={styles.container}>
            <Navigation
                viewDate={viewDate}
                setViewDate={onChangeViewDate}
            />
            <div className={styles.wrapper}>
                <MonthView
                    viewDate={viewDate}
                    selectedDate={selectedDate}
                    todos={todos}
                    onClick={onClickTile}
                />
                <TodoListTemplate
                    todos={todos}
                    selectedDate={selectedDate}
                    value={input}
                    onChange={onChangeInput}
                    onKeyPress={onKeyPress}
                    onToggle={onToggle}
                    onRemove={onRemove}
                />
            </div>
        </div>
    );
}

export default Calendar;