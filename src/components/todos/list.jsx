import React from 'react';

import TodoFilter from './filter';


const TODO_FILTERS = {
  [`all`]: () => true,
  [`active`]: todo => !todo.isChecked,
  [`completed`]: todo => todo.isChecked,
};

class TodoList extends React.Component {

  handleOnCheckbox(id, e) {
    e.target.checked == this.props.actions.toggleTodo(id);
  }

  removeTodo(id, e) {
    this.props.actions.removeTodo(id);
  }

  render() {

    const filteredTodos = this.props.todos.items.filter(TODO_FILTERS[this.props.todos.filterBy]);

    if (this.props.todos.items.length > 0) {
      return (
        <div>
          <ul>
            {
              filteredTodos.map((todo) => {
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
          <TodoFilter filteredTodos={filteredTodos} actions={this.props.actions} todos={this.props.todos} />
        </div>
      )
    }

    return null;
  }
};

export default TodoList;
