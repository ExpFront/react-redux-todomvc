import { handleActions } from 'redux-actions';
import * as types from '../constants/todos';

const initialState = [];


const todos = handleActions({

  [types.ADD_TODO]: (state, action) => {

    const all = {
      id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
      name: action.text,
      isChecked: false
    };

    return [
      ...state,
      all,
    ];
  },

  [types.TOGGLE_TODO]: (state, action) => {
    return state.map((todo) =>
      todo.id === action.id ? { ...todo, isChecked: !todo.isChecked } : todo)
  },

  [types.REMOVE_TODO]: (state, action) => {
    return state.filter(todo => todo.id !== action.id);
  },

}, initialState);

export default todos;
