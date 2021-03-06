import React, { Component } from 'react';
import { is } from 'immutable';
import DayTile from './DayTile';
import styles from './MonthView.module.css';

export default class MonthView extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return (this.props.viewDate !== nextProps.viewDate) ||
            (!is(this.todos, nextProps.todos));
    }

    render() {
        const {
            viewDate,
            selectedDate,
            todos,
            onClick,
        } = this.props;

        const dayList = [
            "SUN",
            "MON",
            "TUE",
            "WED",
            "THU",
            "FRI",
            "SAT"
        ];

        const datesInView = (() => {
            const y = parseInt(viewDate / 10000);
            const m = parseInt((viewDate % 10000) / 100);

            const firstDayOfMonth = new Date(y, m, 1).getDay();
            const lastDayOfMonth = new Date(y, m + 1, 0).getDay();
            const lastDateOfMonth = new Date(y, m + 1, 0).getDate();

            let datesInView = [];

            // push dates in last month
            if(firstDayOfMonth !== 0) {
                const lastDateOfPrevMonth = new Date(y, m, 0).getDate();
                const k = lastDateOfPrevMonth - firstDayOfMonth + 1;
                const yearOfPrevMonth = (m === 0) ? y - 1 : y;
                const prevMonth = (m === 0) ? 11 : m - 1;

                for(let i = 0; i < firstDayOfMonth; i++) {
                    datesInView.push(
                        yearOfPrevMonth * 10000 + prevMonth * 100 + k + i
                    );
                }
            }

            // push dates in current month
            for(let i = 0; i < lastDateOfMonth; i++) {
                datesInView.push(
                    y * 10000 + m * 100 + i + 1
                );
            }

            // push dates in next month
            if(lastDayOfMonth !== 6) {
                let k = 1;
                const yearOfNextMonth = (m === 11) ? y + 1 : y;
                const nextMonth = (m === 11) ? 0 : m + 1;

                for(let i = lastDayOfMonth + 1; i < 7; i++) {
                    datesInView.push(
                        yearOfNextMonth * 10000 + nextMonth * 100 + k++
                    );
                }
            }

            return datesInView;
        })();

        const todoList = (() => {
            let todoList = [];
            const firstDate = datesInView[0];
            const lastDate = datesInView[datesInView.length - 1];

            let todosInView = todos.toJS().filter((todo) =>
                    todo.date >= firstDate && todo.date <= lastDate
            );

            todosInView.sort((a, b) => a.date - b.date);

            let todosInWeek = [];
            for(let i = 0; i < datesInView.length; i++) {
                const todosInDay = todosInView.filter(
                    todo => (todo.date === datesInView[i])
                );

                todosInWeek.push({
                    date: datesInView[i],
                    details: todosInDay.map(todo => ({text: todo.text, done: todo.checked}))
                });

                if (i % 7 === 6) {
                    todoList.push(todosInWeek);
                    todosInWeek = [];
                }
            }

            return todoList;
        })();

        const dayTiles = todoList.map(todosInWeek =>
            <tr>
                {
                    todosInWeek.map(todosInDay => {
                        const selected = (todosInDay.date === selectedDate);
                        return (<DayTile selected={selected} todos={todosInDay} onClick={onClick}/>);
                    })
                }
            </tr>
        );

        return (
            <div>
                <table className={styles.table}>
                    <tbody>
                    <tr>
                        { dayList.map(day =>
                            <th className={styles.th}>
                                {day}
                            </th>
                        )}
                    </tr>
                    { dayTiles }
                    </tbody>
                </table>
            </div>
        );
    }
}
