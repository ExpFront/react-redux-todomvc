import { handleActions } from 'redux-actions';
import * as types from '../constants/todos';
import * as filterTypes from '../constants/todosFilters';

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

  [types.FILTER_TODOS]: (state, action) => {
    switch (action.filter) {
      case filterTypes.SHOW_ALL:
        return state;
      case filterTypes.SHOW_ACTIVE:
        return state.filter(todo => !todo.isChecked);
      case filterTypes.SHOW_COMPLETED:
        const completed = state.filter(todo => todo.isChecked);
        return completed;
    };
  }

}, initialState);

export default todos;
