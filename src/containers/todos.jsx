import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/todos';

import TodoForm from '../components/todos/form';
import TodoList from '../components/todos/list';

class TodosContainer extends React.Component  {

  render() {
    return (
      <div className="todoApp">
        <TodoForm actions={this.props.actions} />
        <div className="searchMenuField">
          <TodoList actions={this.props.actions} todos={this.props.todos} />
        </div>
      </div>
    )
  }
};

function selectState({todos}) {
  return { todos };
}

function passActions(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(selectState, passActions)(TodosContainer);
