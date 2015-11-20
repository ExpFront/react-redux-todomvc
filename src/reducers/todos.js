import { handleActions } from 'redux-actions';
import { ADD_TODO, ADD_ACTIVE_TODO, REMOVE_ACTIVE_TODO, ADD_COMPLETED_TODO, REMOVE_COMPLETED_TODO, SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED, IS_CHECKED, REMOVE_TODO } from '../constants/todos';

const all = [];
const active = [];
const completed = [];
const filtered = [];


const initialState = {
  all: undefined,
  active: undefined,
  completed: undefined,
  filtered: all,
  flag: undefined,
};


const todos = handleActions({

  [ADD_TODO]: (state, action) => {
    all.push({'name': action.data, 'id': all.length, 'isChecked': false});


    return {
      ...state,
      all,
    };
  },

  [SHOW_ALL]: (state, action) => {
    const filtered = all;

    return {
      ...state,
      filtered,
    };
  },

  [SHOW_ACTIVE]: (state, action) => {
    const filtered = all.filter((node) => {
      return node.isChecked == false;
    });

    return {
      ...state,
      filtered,
    };
  },

  [SHOW_COMPLETED]: (state, action) => {
    const filtered = all.filter((node) => {
      return node.isChecked == true;
    });

    return {
      ...state,
      filtered,
    };
  },

  [IS_CHECKED]: (state, action) => {
    all[action.id].isChecked = action.flag;

    return {
      ...state,
      all,
    };
  },

  [REMOVE_TODO]: (state, action) => {
    all.splice(action.id, 1);
    all.map((node) => {
      if (node.id >= action.id) node.id--;
    });

    return {
      ...state,
    };
  }

}, initialState);

export default todos;
