import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/todos';


class TodoFilter extends React.Component{

  showAll() {
    this.props.actions.showAll();
  }

  showActive() {
    this.props.actions.showActive();
  }

  showCompleted() {
    this.props.actions.showCompleted();
  }

  render() {
    if (this.props.todos.all) {
      return (
        <div>
          <span className='filterAll' onClick={this.showAll.bind(this)}>All|</span>
          <span className='filterActive' onClick={this.showActive.bind(this)}>Active|</span>
          <span className='filterCompleted' onClick={this.showCompleted.bind(this)}>Completed</span>
        </div>
      )

    }

    return null;
  }
};

class TodoList extends React.Component {

  handleOnCheckbox(id, e) {
    console.log('this is: ' + e.target.checked);
    if (e.target.checked == true) {
      this.props.actions.addCompletedTodo(e.target.nextSibling.innerHTML, id);
      this.props.actions.isChecked(id, true);
      this.props.actions.removeActiveTodo(id);
    }
    if (e.target.checked == false) {
      this.props.actions.removeCompletedTodo(e.target.nextSibling.innerHTML, id);
      console.log('I AM RUNNING');
      this.props.actions.isChecked(id, false);
      this.props.actions.addActiveTodo(e.target.nextSibling.innerHTML, id);
    }

  }

  removeTodo(e) {
    this.props.actions.removeTodo(e.target.previousSibling.innerHTML);
  }

  render() {
    console.log(this.props.todos.filtered);
    if (this.props.todos.filtered) {
      return (
        <div>
          <ul>
            {
              this.props.todos.filtered.map((todo) => {
                console.log('todo.isChecked is ' + todo.isChecked)
                return (
                  <li key={todo.id}>
                    <input id={todo.id} ref="checkbox" type="checkbox" checked={todo.isChecked} onChange={this.handleOnCheckbox.bind(this, todo.id)} />
                    <label>{todo.name}</label>
                    <fa onClick={this.removeTodo.bind(this)}>&#215;</fa>
                  </li>
                );
              })
            }
          </ul>
          <TodoFilter actions={this.props.actions} todos={this.props.todos} />
        </div>
      )
    }

    return null;
  }
};

class Landing extends React.Component{

  handleOnSubmit(e) {
    e.preventDefault();

    if (this.refs.input.value.length > 0) {
      this.props.actions.addTodo(this.refs.input.value);
      this.props.actions.addActiveTodo(this.refs.input.value);
    }

    this.refs.input.value = '';
  }

  render() {
    return (
      <section className="section-intro">
         <div className="container-fluid">
           <div className="row text-center">
             <div className="entry col-xs-12 text-center">
               <div className="col-xs-12 col-md-8 col-md-offset-2 text-center">
                 <form onSubmit={this.handleOnSubmit.bind(this)}>
                   <h2 className="h2-intro">TodoMVC</h2>
                   <div className="input-group">
                     <input className="form-control" type="text" ref="input" placeholder="What needs to be done?" />
                   </div>
                 </form>
                 <div className="searchMenuField">
                  <TodoList actions={this.props.actions} todos={this.props.todos} />
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>
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

export default connect(selectState, passActions)(Landing);
