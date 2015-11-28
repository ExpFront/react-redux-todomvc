import * as types from '../constants/todos';

export function addTodo(text) {
  return {
    type: types.ADD,
    text,
  };
}

export function removeTodo(id) {
  return {
    type: types.REMOVE,
    id,
  };
}

export function toggleTodo(id) {
  return {
    type: types.TOGGLE,
    id,
  };
}

export function filterTodos(value) {
  return {
    type: types.FILTER,
    by: value,
  };
}
