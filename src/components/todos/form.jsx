import React from 'react';

class TodoForm extends React.Component{

  handleOnSubmit(e) {
    e.preventDefault();

    if (this.refs.input.value.length > 0) {
      this.props.actions.addTodo(this.refs.input.value);
    }

    this.refs.input.value = '';
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit.bind(this)}>
        <div className="input-group">
          <input className="form-control" type="text" ref="input" placeholder="What needs to be done?" />
        </div>
      </form>
    );
  }
};

export default TodoForm;
