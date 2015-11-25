import React from 'react';
import * as filterTypes from '../constants/todosFilters';

import TodoFilter from './todoFilter';

class TodoList extends React.Component {

  handleOnCheckbox(id, e) {
    e.target.checked == this.props.actions.toggleTodo(id);
  }

  removeTodo(id, e) {
    this.props.actions.removeTodo(id);
  }

  render() {

    // const visibleTodos = getVisibleTodos(
    //   this.props.todos,
    //   this.props.visibilityFilter
    // );

    if (this.props.todos) {
      return (
        <div>
          <ul>
            {
              this.props.todos.map((todo) => {
                return (
                  <li key={todo.id}>
                    <input id={todo.id} ref="checkbox" type="checkbox" checked={todo.isChecked} onChange={this.handleOnCheckbox.bind(this, todo.id)} />
                    <label ref="todoName" className={todo.isChecked ? 'lined-through' : ''}>{todo.name}</label>
                    <div className="close"><fa id={todo.id} onClick={this.removeTodo.bind(this, todo.id)}>&#215;</fa></div>
                  </li>
                );
              })
            }
          </ul>
          <TodoFilter count={this.props.todos.length} actions={this.props.actions} todos={this.props.todos} />
        </div>
      )
    }

    return null;
  }
};

export default TodoList;
