import React, {Component} from 'react';


export default class AddTodo extends Component {
  render() {
    return (
      <div className="row collapse">
        <div className="large-9 columns">
          <input type="text" placeholder="New Todo"/>
        </div>
        <div className="large-3 columns">
          <button className="postfix alert">Add</button>
        </div>
      </div>
    );
  }
}