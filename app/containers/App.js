import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import AddTodo from './../components/AddTodo'
import TodoList from './../components/TodoList'
import TodoItem from './../components/TodoItem'
import {addTodo} from './../reducers/actions'

// Stylesheets
import 'foundation-sites/scss/foundation.scss'
import './../style/app.scss'

class App extends Component {
  render() {
    const {dispatch, immutableState} = this.props;
    return (
      <div className="row">
        <form className="todo-box large-6 columns large-centered">
          <h2>My Todo List</h2>
          <TodoList todos={immutableState.get('todos')}/>
          <AddTodo onAddClick={text => dispatch(addTodo(text))}/>
        </form>
      </div>
    );
  }
}

function select(state) {
  // TODO - add filter function / find a way to make In
  return {immutableState: state};
}

export default connect(select)(App);
