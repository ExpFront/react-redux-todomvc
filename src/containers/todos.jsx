import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions/todos';
import * as filterTypes from '../constants/todosFilters'




// const visibilityFilter = (
//   state = types.SHOW_ALL,
//   action
// ) => {
//   switch (action.type) {
//     case 'SET_VISIBILITY_FILTER':
//       return action.filter;
//     default:
//       return state;
//   }
// };
//
// const getVisibleTodos = (
//   todos,
//   filter,
// ) => {
//   switch (filter) {
//     case types.SHOW_ALL:
//       return todos;
//
//     case types.SHOW_ACTIVE:
//       return todos.filter(todo => todo.isChecked);
//
//     case types.SHOW_COMPLETED:
//       return todos.filter(todo => !todo.isChecked);
//   }
// };

class TodoFilter extends React.Component {

  // showAll(e) {
  //   visibilityFilter(this.props.todos, {
  //     type: 'SET_VISIBILITY_FILTER',
  //     filter: types.SHOW_ALL,
  //   });
  // }
  //
  // showActive(e) {
  //   visibilityFilter(this.props.todos, {
  //     type: 'SET_VISIBILITY_FILTER',
  //     filter: types.SHOW_ACTIVE,
  //   });
  // }
  //
  // showCompleted(e) {
  //   visibilityFilter(this.props.todos, {
  //     type: 'SET_VISIBILITY_FILTER',
  //     filter: types.SHOW_COMPLETED,
  //   });
  // }

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

class Landing extends React.Component {

  handleOnSubmit(e) {
    e.preventDefault();

    if (this.refs.input.value.length > 0) {
      this.props.actions.addTodo(this.refs.input.value);
    }

    this.refs.input.value = '';
  }

  render() {
    return (
      <section className="section-intro">
         <div className="container-fluid">
           <div className="row text-center">
             <div className="col-xs-12">
               <div className="col-xs-12 col-md-8 col-md-offset-2">
                 <h2 className="h2-intro">TodoMVC</h2>
                 <div className="todoApp">
                   <form onSubmit={this.handleOnSubmit.bind(this)}>
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
