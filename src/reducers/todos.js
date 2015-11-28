import { handleActions } from 'redux-actions';
import * as types from '../constants/todos';

const initialState = {
  items: [],
  filterBy: 'all',
};

const todos = handleActions({

  [types.ADD]: (state, action) => {

    const items = [...state.items, {
      id: state.items.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
      name: action.text,
      isChecked: false
    }];

    return {
      ...state,
      items,
    };
  },

  [types.TOGGLE]: (state, action) => {
    const items = state.items.map(todo =>
      todo.id === action.id ? { ...todo, isChecked: !todo.isChecked } : todo)

    return {
      ...state,
      items,
    };
  },

  [types.REMOVE]: (state, action) => {
    const items = state.items.filter(todo => todo.id !== action.id);

    return {
      ...state,
      items,
    };
  },

  [types.FILTER]: (state, action) => {

    return {
      ...state,
      filterBy: action.by
    };
  },

}, initialState);

export default todos;
