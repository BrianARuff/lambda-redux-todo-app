import React from 'react';

export default class CreateTodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ''
    }
  }

  handleOnChangeInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleCreateTodo(this.state.value)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleOnChangeInput} name="value" type="text" placeholder="Name of todo" />
        <button onClick={this.handleSubmit}>Create Todo</button>
      </form>
    )
  }
}