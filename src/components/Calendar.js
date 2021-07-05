import React from 'react';
import { List, Map } from 'immutable';
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
    } = props;

    const todosInSelectedDate = todos.filter(
        todo => todo.date === selectedDate
    );

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
                todos={todosInSelectedDate}
                selectedDate={selectedDate}
                value={input}
                // onToggle={this.handleToggle}
                onChange={onChangeInput}
                onKeyPress={onKeyPress}
            />
        </Container>
    );
}

export default Calendar;
//
// export default class Calendar extends Component {
//     constructor(props) {
//         super(props);
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
//
//     setViewDate = (nextViewDate) => {
//         // check whether currDate can be prevDate
//         this.setState({
//             viewDate: nextViewDate
//         });
//     }
//
//     onTileClick = (date) => {
//         const { viewDate, selectedDate } = this.state;
//         const m = parseInt((date % 10000) / 100);
//         const viewMonth = parseInt((viewDate % 10000) / 100);
//         this.setState({
//             selectedDate: (m === viewMonth) ? date : selectedDate
//         });
//     }
//
//     handleToggle = (id) => {
//         const { todos } = this.state;
//
//         const index = todos.findIndex(todo => todo.id === id);
//         const selected = todos[index];
//
//         // copy an array
//         const nextTodos = [...todos];
//
//         nextTodos[index] = {
//             ...selected,
//             checked: !selected.checked,
//         };
//
//         this.setState({
//             todos: nextTodos
//         });
//     }
//
//     handleChange = (e) => {
//         this.setState({
//             input: e.target.value
//         });
//     }
//
//     handleCreate = () => {
//         const { input, selectedDate, todos } = this.state;
//         const createdDate = selectedDate;
//
//         this.setState({
//             input: '',
//             todos: todos.concat({
//                 id: this.id++,
//                 date: createdDate,
//                 text: input,
//                 checked: false,
//             }),
//         });
//     }
//
//     handleKeyPress = (e) => {
//         if(e.key === 'Enter') {
//             this.handleCreate();
//         }
//     }
//
//     render() {
//         const todosInSelectedDate = this.state.todos.filter(
//             (todo) => todo.date === this.state.selectedDate
//         );
//
//         return (
//             <Container>
//                 <Navigation
//                     viewDate={this.state.viewDate}
//                     setViewDate={this.setViewDate}
//                 />
//                 <MonthView
//                     viewDate={this.state.viewDate}
//                     todos={this.state.todos}
//                     onClick={this.onTileClick}
//                 />
//                 <TodoListTemplate
//                     todos={todosInSelectedDate}
//                     selectedDate={this.state.selectedDate}
//                     value={this.state.input}
//                     onToggle={this.handleToggle}
//                     onChange={this.handleChange}
//                     onKeyPress={this.handleKeyPress}
//                 />
//             </Container>
//         );
//     }
// }
//
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
