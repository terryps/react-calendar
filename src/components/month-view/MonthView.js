import React, { Component } from 'react';
import styled from 'styled-components';
import DayTile from './DayTile';

export default class MonthView extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props.todos !== nextProps.todos;
    }

    render() {
        const {
            viewDate,
            todos,
            onClick,
        } = this.props;

        const daysInMonth = (() => {
            const y = viewDate.year;
            const m = viewDate.month;

            const firstDayOfMonth = new Date(y, m, 1).getDay();
            const lastDayOfMonth = new Date(y, m + 1, 0).getDay();
            const lastDateOfMonth = new Date(y, m + 1, 0).getDate();

            let daysInWeek = [];
            let daysInMonth = [];

            // push dates in last month
            if(firstDayOfMonth !== 0) {
                const lastDateOfPrevMonth = new Date(y, m, 0).getDate();
                const k = lastDateOfPrevMonth - firstDayOfMonth + 1;

                for(let i = 0; i < firstDayOfMonth; i++) {
                    daysInWeek.push(
                        {month: m - 1, day: k + i}
                    );
                }
            }

            // push dates in current month
            for(let i = 0; i < lastDateOfMonth; i++) {
                daysInWeek.push(
                    {month: m, day: i + 1}
                );
                if((firstDayOfMonth + i) % 7 === 6) {
                    daysInMonth.push(
                        daysInWeek
                    );
                    daysInWeek = [];
                }
            }

            // push dates in next month
            if(lastDayOfMonth !== 6) {
                let k = 1;
                for(let i = lastDayOfMonth + 1; i < 7; i++) {
                    daysInWeek.push(
                        {month: m + 1, day: k++}
                    );
                }
                daysInMonth.push(
                    daysInWeek
                );
            }

            return daysInMonth;
        })();


        const a = (() => {
            let todosInView = [];
            todosInView = todos.filter((todo) =>
                {

                }
            );
        })();

        const dayTiles = daysInMonth.map(week =>
            <tr>
                {week.map(date =>
                    // <DayTile day{date.day}></DayTile>
                    // <DayTile day={day} onClick={onClick}></DayTile>
                {})}
            </tr>
        );

        return (
            <Div>
                <table>
                    <tbody>
                    { dayTiles }
                    </tbody>
                </table>
            </Div>
        );
    }
}

const Div = styled.div`
    grid-row: 2/3;
    
    table {
        border-collapse: collapse;
        border: .1em solid #000;
    }
`;