import React from 'react';

class Todo extends React.Component {
  render() {
    return (
      <div>
        <h4>{this.props.todo.value}</h4>
        <p>Status: {this.props.todo.completed ? 'Completed' : 'Not Complete'}</p>
        <button onClick={() => this.props.handleUpdateTodo(this.props.todo)}>Toggle Todo Status</button>
      </div>
    )
  }
}

export default Todo;