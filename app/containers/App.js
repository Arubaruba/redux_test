import React, {Component} from 'react'
import AddTodo from './../components/AddTodo'
import TodoList from './../components/TodoList'
import TodoItem from './../components/TodoItem'

// Stylesheets
import 'foundation-sites/scss/foundation.scss'
import './../style/app.scss'

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <form className="todo-box large-6 columns large-centered">
          <h2>My Todo List</h2>
          <TodoList/>
          <AddTodo/>
        </form>
      </div>
    );
  }
}