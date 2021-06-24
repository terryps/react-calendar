import React from 'react';
import styled from 'styled-components';
import Day from './Day';

const MonthView = (props) => {
    const {
        viewDate
    } = props;

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
                    k + i
                );
            }
        }

        // push dates in current month
        for(let i = 0; i < lastDateOfMonth; i++) {
            daysInWeek.push(
                i + 1
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
                    k++
                );
            }
            daysInMonth.push(
                daysInWeek
            );
        }

        return daysInMonth;
    })();

    return (
        <Div>
            <Table>
                <tbody>
                {
                    daysInMonth.map(week =>
                        <tr>
                            { week.map(day => <Day date={day}/>) }
                        </tr>
                    )
                }
                </tbody>
            </Table>
        </Div>
    );
}

export default MonthView;

const Div = styled.div`
    grid-row: 2/3;
`;
const Table = styled.table`
    border-collapse: collapse;
    border: .1em solid #000;
`;