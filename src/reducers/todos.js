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

  [ADD_ACTIVE_TODO]: (state, action) => {
    /*active = all.filter((node) => {
      return node.isChecked == false;
    });*/

    return {
      ...state,
      active,
    };
  },

  [REMOVE_ACTIVE_TODO]: (state, action) => {
    console.log('id is' + action.id);
    active.splice(action.id, 1);

    return {
      ...state,
      active,
    }
  },

  [ADD_COMPLETED_TODO]: (state, action) => {
    completed.splice(action.id, 0, {'name': action.data, 'id': completed.length, 'isChecked': true});

    return {
      ...state,
      completed,
    };
  },

  [REMOVE_COMPLETED_TODO]: (state, action) => {
    completed.splice(action.id, 1);

    return {
      ...state,
      completed,
    }
  },



  [SHOW_ALL]: (state, action) => {
    const filtered = all;

    return {
      ...state,
      filtered,
    };
  },

  [SHOW_ACTIVE]: (state, action) => {
    const filtered = active;

    return {
      ...state,
      filtered,
    };
  },

  [SHOW_COMPLETED]: (state, action) => {
    const filtered = completed;

    return {
      ...state,
      filtered,
    };
  },

  [IS_CHECKED]: (state, action) => {
    console.log('flag is ' + action.flag);
    all[action.id].isChecked = action.flag;
    console.log(all[action.id].isChecked);

    return {
      ...state,
      all,
    };
  },

  [REMOVE_TODO]: (state, action) => {
    all.splice(all.indexOf(action.data), 1);
    active.splice(active.indexOf(action.data), 1);
    completed.splice(completed.indexOf(action.data), 1);

    return {
      ...state,
    };
  }

}, initialState);

export default todos;
