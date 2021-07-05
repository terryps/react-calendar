import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

const CHANGE_VIEW_DATE = 'CHANGE_VIEW_DATE';
const CHANGE_TILE = 'CLICK_TILE';
const TOGGLE = 'TOGGLE';
const CHANGE_INPUT = 'CHANGE_INPUT';
const INSERT = 'INSERT';

export const changeViewDate = createAction(CHANGE_VIEW_DATE, date => date);
export const changeTile = createAction(CHANGE_TILE, date => date);
export const changeInput = createAction(CHANGE_INPUT, value => value);
export const toggle = createAction(TOGGLE, id => id);
export const insert = createAction(INSERT, text => text);

let id = 0;

const initialState = Map({
    input: '',
    viewDate: 20210605,
    selectedDate: 20210605,
    todos: List(),
});

const reducer = handleActions({
    [CHANGE_VIEW_DATE]: (state, action) => state.set('viewDate', action.payload),
    [CHANGE_TILE]: (state, action) => state.set('selectedDate', action.payload),
    [CHANGE_INPUT]: (state, action) => state.set('input', action.payload),
    // [TOGGLE]: (state, action) => state.set('id', action.payload),
    [INSERT]: (state, {payload: text}) => {
        const item = Map({
            id: id++,
            date: 20210605,
            checked: false,
            text: text
        });

        return state.update('todos', todos => todos.push(item));
    },
}, initialState);

export default reducer;