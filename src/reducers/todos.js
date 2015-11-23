import { handleActions } from 'redux-actions';
import { ADD_TODO, ADD_ACTIVE_TODO, REMOVE_ACTIVE_TODO, ADD_COMPLETED_TODO, REMOVE_COMPLETED_TODO, SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED, IS_CHECKED, REMOVE_TODO } from '../constants/todos';

const initialState = [];


const todos = handleActions({

  [ADD_TODO]: (state, action) => {

    const all = {
      id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
      name: action.data,
      isChecked: false
    };

    return [
      ...state,
      all,
    ];
  },

  [IS_CHECKED]: (state, action) => {

    return state.map((node) =>
      node.id === action.id ? { ...node, isChecked: !node.isChecked } : node)
  },

  [REMOVE_TODO]: (state, action) => {

    return state.filter(node => node.id !== action.id);
  },

}, initialState);

export default todos;
