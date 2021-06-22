import React, { Component } from 'react';
import WebFont from 'webfontloader';
import DateController from "../date-controller/DateController";
import MonthView from "../month-view/MonthView"
import TodoListTemplate from "../todo-list-template/TodoListTemplate";


export default class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 3,
            input: '',
            currYear: new Date().getFullYear(),
            currMonth: new Date().getMonth(),
            currDate: new Date().getDate(),
            todos: [
                { id: 0, text: 'waking up at 6 a.m', check: true },
                { id: 1, text: 'styling todo list item', check: false },
                { id: 2, text: 'studying react', check: false },
            ],
        };
    }

    componentDidMount() {
        WebFont.load({
            google: {
                families: ['Fugaz One', 'Roboto']
            }
        });
    }

    changeInput = (e) => {
        this.setState({
            input: e.target.value
        });
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

    handleIncrease = () => {
        const { currYear, currMonth } = this.state;
        this.setState({
            currYear: (currMonth === 11) ?
                currYear + 1 : currYear,
            currMonth: (currMonth === 11) ?
                0 : currMonth + 1,
        })
    }

    handleDecrease = () => {
        const { currYear, currMonth } = this.state;
        this.setState({
            currYear: (currMonth === 0)?
                currYear - 1 : currYear,
            currMonth: (currMonth === 0) ?
                11 : currMonth - 1,
        })
    }

    render() {

        return (
            <div style={{fontFamily: 'Fugaz One'}}>
                <DateController
                    y={this.state.currYear}
                    m={this.state.currMonth}
                    handleIncrease={this.handleIncrease}
                    handleDecrease={this.handleDecrease}
                />
                <MonthView
                    y={this.state.currYear}
                    m={this.state.currMonth}
                />
                <TodoListTemplate
                    onChange={this.changeInput}
                />
            </div>
        );
    }
}
