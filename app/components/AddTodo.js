import React, {Component, PropTypes} from 'react';


export default class AddTodo extends Component {
  render() {
    return (
      <div className="row collapse">
        <div className="large-9 columns">
          <input type="text" placeholder="New Todo" ref="todoTextInput"/>
        </div>
        <div className="large-3 columns">
          <button type="button" onClick={e => this.handleClick(e)} className="postfix alert">Add</button>
        </div>
      </div>
    );
  }

  handleClick(e) {
    const node = this.refs.todoTextInput;
    this.props.onAddClick(node.value.trim());
    node.value = '';
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
};