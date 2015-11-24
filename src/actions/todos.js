import * as types from '../constants/todos';


export function addTodo(text) {
  return {
    type: types.ADD_TODO,
    text,
  };
}


export function removeTodo(id) {
  return {
    type: types.REMOVE_TODO,
    id,
  };
}

export function toggleTodo(id, flag) {
  return {
    type: types.TOGGLE_TODO,
    id,
    flag,
  };
}
