import React from 'react';


class TodoFilter extends React.Component {

  filterTodos(value, e) {
    this.props.actions.filterTodos(value);
  }

  render() {
    if (this.props.todos) {
      return (
        <div className="todoAppFooter row">
          <div className="todoAppCount col-xs-2 hidden-xs">{this.props.filteredTodos.length}{this.props.filteredTodos.length !== 1 ? ' items left' : ' item left'}</div>
          <div className="todoAppFilters col-xs-8 col-xs-offset-2 col-sm-offset-0">
            <span className={this.props.todos.filterBy === 'all' ? "filterAll selected" : "filterAll"} onClick={this.filterTodos.bind(this, 'all')}>All</span>
            <span className={this.props.todos.filterBy === 'active' ? "filterActive selected" : "filterActive"} onClick={this.filterTodos.bind(this, 'active')}>Active</span>
            <span className={this.props.todos.filterBy === 'completed' ? "filterCompleted selected" : "filterCompleted"} onClick={this.filterTodos.bind(this, 'completed')}>Completed</span>
          </div>
        </div>
      )
    }

    return null;
  }
};

export default TodoFilter;
