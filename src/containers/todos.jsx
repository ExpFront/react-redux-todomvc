import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/todos';

import TodoForm from '../components/todoForm';
import TodoList from '../components/todoList';


class TodosContainer extends React.Component  {

  render() {
    return (
      <div className="todoApp">
        <TodoForm actions={this.props.actions} todos={this.props.todos}/>
        <div className="searchMenuField">
          <TodoList actions={this.props.actions} todos={this.props.todos} />
        </div>
      </div>
    )
  }
};


function selectState(state) {
  return {
    todos: state.todos,
  };
}

function passActions(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(selectState, passActions)(TodosContainer);
