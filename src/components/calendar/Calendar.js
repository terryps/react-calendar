import React, { Component } from 'react';
import styled from 'styled-components';
import Navigation from "../navigation/Navigation";
import MonthView from "../month-view/MonthView"
import TodoItemList from "../todo-list-template/TodoItemList";


export default class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 3,
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
                { id: 0, date: [], text: 'waking up at 6 a.m', checked: true },
                { id: 1, date: [], text: 'styling todo list item', checked: false },
                { id: 2, date: [], text: 'studying react', checked: false },
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
        const { input, todos } = this.state;
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
                />
                <TodoItemList
                    todos={this.state.todos}
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
