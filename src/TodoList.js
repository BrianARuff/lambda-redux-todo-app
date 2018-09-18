import React from 'react';
import { connect } from 'react-redux';
import { createTodo, updateTodo, deleteTodo } from './actions';
import Todo from './Todo';
import CreateTodoForm from './CreateTodoForm';

class TodoList extends React.Component {

  handleCreateTodo = (value) => {
    this.props.createTodo(value);
  }

  handleUpdateTodo = (todo) => {
    this.props.updateTodo(todo);
  }

  handleDeleteTodo = (todo) => {
    this.props.deleteTodo(todo);
  }

  render() {
    return (
      <div>
      <CreateTodoForm handleCreateTodo={this.handleCreateTodo} />
      {
        this.props.todos.map((todo) => {
          return (
            <Todo key={todo.id} todo={todo} handleUpdateTodo={this.handleUpdateTodo} handleDeleteTodo={this.handleDeleteTodo} />
          )
        })
      }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state
  }
}

export default connect(mapStateToProps, { createTodo, updateTodo, deleteTodo })(TodoList);