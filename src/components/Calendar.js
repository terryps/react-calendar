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

const Container = styled.div`
    display: grid;
    align-content: start;
    grid-auto-rows: minmax(16%, auto);

    min-block-size: 100vh;

    margin-inline: auto;
    inline-size: 90%;
    min-inline-size: 32rem;
    max-inline-size: 70rem;

    align-items: center;
    justify-items: center;
    
    font-family: Roboto;
`;
