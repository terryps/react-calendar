import React from 'react';
import styled from 'styled-components';
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
        <Container>
            <Navigation
                viewDate={viewDate}
                setViewDate={onChangeViewDate}
            />
            <MonthView
                viewDate={viewDate}
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
        </Container>
    );
}

export default Calendar;

//         this.id = 7;
//
//         this.state = {
//             input: '',
//             today: dateToNum(new Date()),
//             viewDate: dateToNum(new Date()),
//             selectedDate: dateToNum(new Date()),
//             todos: [
//                 { id: 0, date: 20210604, text: 'waking up at 6 a.m', checked: true },
//                 { id: 1, date: 20210608, text: 'styling todo list item', checked: false },
//                 { id: 2, date: 20210608, text: 'implementing a sort algorithm', checked: true },
//                 { id: 3, date: 20210525, text: 'studying react', checked: false },
//                 { id: 4, date: 20210530, text: 'studying redux', checked: false },
//                 { id: 5, date: 20210630, text: 'studying react', checked: false },
//                 { id: 6, date: 20210701, text: 'studying react', checked: false },
//             ],
//         };
//     }

const Container = styled.div`
    display: grid;
    align-content: start;
    grid-auto-rows: minmax(20%, auto);

    min-block-size: 100vh;

    margin-inline: auto;
    inline-size: 90%;
    min-inline-size: 66rem;
    max-inline-size: 70rem;

    align-items: center;
    justify-items: center;
`;
