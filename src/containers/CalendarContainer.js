import React, { Component } from 'react';
import Calendar from 'components/Calendar';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as calendarActions from 'store/modules/Calendar';

class CalendarContainer extends Component {
    handleChangeViewDate = (date) => {
        const { CalendarActions } = this.props;
        CalendarActions.changeViewDate(date);
    }

    handleChangeTile = (date) => {
        const { viewDate, CalendarActions } = this.props;
        const ym1 = parseInt(viewDate / 100);
        const ym2 = parseInt(date / 100);

        if(ym1 === ym2) {
            CalendarActions.changeTile(date);
        }
    }

    handleChangeInput = (e) => {
        const { CalendarActions } = this.props;
        CalendarActions.changeInput(e.target.value);
    }

    handleInsert = () => {
        const { input, CalendarActions } = this.props;

        if(input.length) {
            CalendarActions.insert(input);
            CalendarActions.changeInput('');
        }
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.handleInsert();
        }
    }

    handleToggle = (id) => {
        const { CalendarActions } = this.props;
        CalendarActions.toggle(id);
    }

    handleRemove = (id) => {
        const { CalendarActions } = this.props;
        CalendarActions.remove(id);
    }

    render() {
        const {
            handleChangeViewDate,
            handleChangeTile,
            handleChangeInput,
            handleKeyPress,
            handleToggle,
            handleRemove,
        } = this;

        const {
            input,
            viewDate,
            selectedDate,
            todos,
        } = this.props;

        return (
            <Calendar
                input={input}
                viewDate={viewDate}
                selectedDate={selectedDate}
                todos={todos}
                onChangeViewDate={handleChangeViewDate}
                onClickTile={handleChangeTile}
                onChangeInput={handleChangeInput}
                onKeyPress={handleKeyPress}
                onToggle={handleToggle}
                onRemove={handleRemove}
            />
        );
    }
}

export default connect(
    (state) => ({
        input: state.get('input'),
        viewDate: state.get('viewDate'),
        selectedDate: state.get('selectedDate'),
        todos: state.get('todos'),
    }),
    (dispatch) => ({
        CalendarActions: bindActionCreators(calendarActions, dispatch)
    })
)(CalendarContainer);