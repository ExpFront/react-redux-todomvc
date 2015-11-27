import React from 'react';


class TodoFilter extends React.Component {

  filterTodos(value, e) {
    this.props.actions.filterTodos(value);
    console.log(e.target.getAttribute('data-filter'));
    if (this.props.todos.filterBy === e.target.getAttribute("data-filter")) {
      e.target.style.color = "red";
    }
  }

  render() {
    if (this.props.todos) {
      return (
        <div className="todoAppFooter row">
          <div className="todoAppCount col-xs-2 hidden-xs">{this.props.filteredTodos.length}{this.props.filteredTodos.length !== 1 ? ' items left' : ' item left'}</div>
          <div className="todoAppFilters col-xs-8 col-xs-offset-2 col-sm-offset-0">
            <span className='filterAll' data-filter='all' onClick={this.filterTodos.bind(this, 'all')}>All</span>
            <span className='filterActive' data-filter='active' onClick={this.filterTodos.bind(this, 'active')}>Active</span>
            <span className='filterCompleted' data-filter='completed' onClick={this.filterTodos.bind(this, 'completed')}>Completed</span>
          </div>
        </div>
      )
    }

    return null;
  }
};

export default TodoFilter;
