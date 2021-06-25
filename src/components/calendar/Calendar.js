import React, { Component } from 'react';
import styled from 'styled-components';
import Navigation from "../navigation/Navigation";
import MonthView from "../month-view/MonthView"
import TodoItemList from "../todo-list/TodoItemList";
import { areObjectsEqual } from "../../shared/utils"

export default class Calendar extends Component {
    constructor(props) {
        super(props);
        this.id = 3;

        this.state = {
            input: '',
            today: new Date(),
            viewDate: {
                year: new Date().getFullYear(),
                month: new Date().getMonth(),
            },
            selectedDate: {
                year: new Date().getFullYear(),
                month: new Date().getMonth(),
                day: new Date().getDate(),
            },
            todos: [
                { id: 0, date: {year: 2021, month: 5, day: 24}, text: 'waking up at 6 a.m', checked: true },
                { id: 1, date: {year: 2021, month: 5, day: 26}, text: 'styling todo list item', checked: false },
                { id: 2, date: {year: 2021, month: 5, day: 25}, text: 'studying react', checked: false },
            ],
        };
    }

    createTodoItem = () => {
        const { input, todos } = this.state;
        this.setState({
            input: '',
            todos: todos.concat({
                date: '',
                text: input,
                checked: false,
            }),
        });
    }

    setViewDate = (nextViewDate) => {
        // check whether currDate can be prevDate
        const { viewDate } = this.state;
        this.setState({
            viewDate: {
                ...viewDate,
                year: nextViewDate.year,
                month: nextViewDate.month,
            }
        });
    }

    onTileClick = (day) => {
        const { viewDate } = this.state;
        this.setState({
            selectedDate: {
                year: viewDate.year,
                month: viewDate.month,
                day: day,
            }
        });
    }

    handleToggle = (id) => {
        const { todos } = this.state;

        const index = todos.findIndex(todo => todo.id === id);
        const selected = todos[index];

        // copy an array
        const nextTodos = [...todos];

        nextTodos[index] = {
            ...selected,
            checked: !selected.checked,
        };

        this.setState({
            todos: nextTodos
        });
    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value
        });
    }

    handleCreate = () => {
        const { input, selectedDate, todos } = this.state;
        this.setState({
            input: '',
            todos: todos.concat({
                id: this.id++,
                date: selectedDate,
                text: input,
                checked: false,
            }),
        });
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.handleCreate();
        }
    }

    render() {
        return (
            <Container>
                <Navigation
                    viewDate={this.state.viewDate}
                    setViewDate={this.setViewDate}
                />
                <MonthView
                    viewDate={this.state.viewDate}
                    todos={this.state.todos}
                    onClick={this.onTileClick}
                />
                <TodoItemList
                    todos={this.state.todos.filter((todo) =>
                        areObjectsEqual(todo.date, this.state.selectedDate))}
                    value={this.state.input}
                    onToggle={this.handleToggle}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
            </Container>
        );
    }
}

const Container = styled.div`
    display: grid;
    align-content: start;
    grid-auto-rows: minmax(20%, auto);
    
    min-block-size: 100vh;
    
    margin-inline: auto;
    inline-size: 90%;
    max-inline-size: 60rem;
    
    align-items: center;
    justify-items: center;
`;
