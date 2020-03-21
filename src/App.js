import React, { Component } from 'react';
import Todoitem from './component/TodoItem.js'
import todoData from './component/todoData'
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      todos: todoData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.complete = !todo.complete
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
    console.log("Changed", id)
  }

  render() {
    const todoComponent = this.state.todos.map(item => <Todoitem key={item.id} item={item} handleChange={this.handleChange} />)

    return (
      <div className="todo">
        <div>
          <h1>Todo App</h1>
        </div>
        <div className="todo-list">
          {todoComponent}
          {/* <Todoitem/>
      <Todoitem/>
      <Todoitem/>
      <Todoitem/>
      <Todoitem/> */}
        </div>
      </div>
    );
  }
}

export default App;
