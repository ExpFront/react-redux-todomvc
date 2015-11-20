import { ADD_TODO, ADD_ACTIVE_TODO, REMOVE_ACTIVE_TODO, ADD_COMPLETED_TODO, REMOVE_COMPLETED_TODO, SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED, IS_CHECKED, REMOVE_TODO } from '../constants/todos';

export function showAll() {
  return {
    type: SHOW_ALL,
  };
}

export function showActive() {
  return {
    type: SHOW_ACTIVE,
  };
}

export function showCompleted() {
  return {
    type: SHOW_COMPLETED,
  };
}

export function addTodo(data) {
  return {
    type: ADD_TODO,
    data,
  };
}

export function addActiveTodo(data, id) {
  return {
    type: ADD_ACTIVE_TODO,
    data,
    id,
  };
}

export function removeActiveTodo(id) {
  return {
    type: REMOVE_ACTIVE_TODO,
    id,
  };
}

export function addCompletedTodo(data, id) {
  return {
    type: ADD_COMPLETED_TODO,
    data,
    id,
  };
}

export function removeCompletedTodo(data) {
  return {
    type: REMOVE_COMPLETED_TODO,
    data,
  };
}

export function isChecked(id, flag) {
  return {
    type: IS_CHECKED,
    id,
    flag,
  };
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id,
  };
}
