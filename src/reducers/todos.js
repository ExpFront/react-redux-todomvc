import { handleActions } from 'redux-actions';
import * as types from '../constants/todos';

const initialState = {
  items: [],
  filterBy: 'all',
};


const todos = handleActions({

  [types.ADD_TODO]: (state, action) => {

    const items = state.items.push({
      id: state.items.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
      name: action.text,
      isChecked: false
    });

    return {
      ...state,
      ...items,
    };
  },

  [types.TOGGLE_TODO]: (state, action) => {
    const items = state.items.map(todo =>
      todo.id === action.id ? { ...todo, isChecked: !todo.isChecked } : todo)

    return {
      ...state,
      items,
    };
  },

  [types.REMOVE_TODO]: (state, action) => {
    const items = state.items.filter(todo => todo.id !== action.id);

    return {
      ...state,
      items,
    };
  },

  [types.FILTER_TODOS]: (state, action) => {
    switch (action.by) {
      case 'all':
        return {
          ...state,
          filterBy: 'all'
        };
      case 'active':
        return {
          ...state,
          filterBy: 'active'
        };
      case 'completed':
        return {
          ...state,
          filterBy: 'completed'
        };
    };
  }

}, initialState);

export default todos;
