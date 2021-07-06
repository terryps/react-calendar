import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

const CHANGE_VIEW_DATE = 'CHANGE_VIEW_DATE';
const CHANGE_TILE = 'CLICK_TILE';
const CHANGE_INPUT = 'CHANGE_INPUT';
const INSERT = 'INSERT';
const TOGGLE = 'TOGGLE';
const REMOVE = 'REMOVE';

export const changeViewDate = createAction(CHANGE_VIEW_DATE, date => date);
export const changeTile = createAction(CHANGE_TILE, date => date);
export const changeInput = createAction(CHANGE_INPUT, value => value);
export const insert = createAction(INSERT, todo => todo);
export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);

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
    [INSERT]: (state, {payload: text}) => {
        const item = Map({
            id: id++,
            date: state.get('selectedDate'),
            checked: false,
            text: text,
        });

        return state.update('todos', todos => todos.push(item));
    },
    [TOGGLE]: (state, {payload: id}) => {
        const index = state.get('todos').findIndex(item => item.get('id') === id);
        return state.updateIn(['todos', index, 'checked'], checked => !checked);
    },
    [REMOVE]: (state, {payload: id}) => {
        const index = state.get('todos').findIndex(item => item.get('id') === id);
        return state.deleteIn(['todos', index]);
    }
}, initialState);

export default reducer;