import React from 'react';
import Day from '../day/Day'

const MonthView = (props) => {
    const {
        y,
        m
    } = props;

    const dates = (() => {
        const firstDayOfMonth = new Date(y, m, 1).getDay();
        const lastDayOfMonth = new Date(y, m + 1, 0).getDay();
        const lastDateOfMonth = new Date(y, m + 1, 0).getDate();

        let datesInWeek = [];
        let result = [];

        // push dates in last month
        if(firstDayOfMonth !== 0) {
            const lastDateOfPrevMonth = new Date(y, m, 0).getDate();
            const k = lastDateOfPrevMonth - firstDayOfMonth + 1;

            for(let i = 0; i < firstDayOfMonth; i++) {
                datesInWeek.push(
                    k + i
                );
            }
        }

        // push dates in current month
        for(let i = 0; i < lastDateOfMonth; i++) {
            datesInWeek.push(
                i + 1
            );
            if((firstDayOfMonth + i) % 7 === 6) {
                result.push(
                    datesInWeek
                );
                datesInWeek = [];
            }
        }

        // push dates in next month
        if(lastDayOfMonth !== 6) {
            let k = 1;
            for(let i = lastDayOfMonth + 1; i < 7; i++) {
                datesInWeek.push(
                    k++
                );
            }
            result.push(
                datesInWeek
            );
        }

        return result;
    })();

    return (
        <div>
            <table>
                <tbody>
                {
                    dates.map(week =>
                        <tr>
                            { week.map(date => <Day date={date}/>) }
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    );
}

export default MonthView;
