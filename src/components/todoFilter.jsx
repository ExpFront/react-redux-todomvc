import React from 'react';
import * as filterTypes from '../constants/todosFilters';


class TodoFilter extends React.Component {

  filterTodos(filter) {
    this.props.actions.filterTodos(filter);
  }

  render() {
    if (this.props.todos) {
      return (
        <div className="todoAppFooter row">
          <div className="todoAppCount col-xs-2 hidden-xs">{this.props.count} {this.props.count > 1 ? 'items left' : 'item left'}</div>
          <div className="todoAppFilters col-xs-8 col-xs-offset-2 col-sm-offset-0">
            <span className='filterAll' onClick={this.filterTodos.bind(this, filterTypes.SHOW_ALL)}>All</span>
            <span className='filterActive' onClick={this.filterTodos.bind(this, filterTypes.SHOW_ACTIVE)}>Active</span>
            <span className='filterCompleted' onClick={this.filterTodos.bind(this, filterTypes.SHOW_COMPLETED)}>Completed</span>
          </div>
        </div>
      )
    }

    return null;
  }
};

export default TodoFilter;
