import React, {Component} from 'react'

export default class TodoList extends Component {
  render() {
    return (
      <div className="todo-items">
        {this.props.todos.map(function (todoItem) {
          console.log(todoItem)
          return (
            <div className="todo-item">{todoItem.get('text')}</div>
          )
        })
        }
      </div>
    )
  }
}