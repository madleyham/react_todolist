import React, { Component } from 'react';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';
import TodoEdit from './Components/TodoEdit';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos: (JSON.parse(localStorage.getItem('state')) === null) ? [] : JSON.parse(localStorage.getItem('state')).todos,
      edit: false,
      editID: null
    };

    localStorage.setItem('state', JSON.stringify(this.state));
    //console.log(this.state);
  }

  handleAddTodo(todo){
    let todos = JSON.parse(localStorage.getItem('state')).todos;
    todos.push(todo);
    this.setState({todos: todos}, () => {
      //console.log(this.state);
      localStorage.setItem('state', JSON.stringify(this.state));
    });
  }

  handleDeleteTodo(id){
    let todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({todos: todos}, () => {
      //console.log(this.state);
      localStorage.setItem('state', JSON.stringify(this.state));
    });
  }

  handleEditTodo(id){
    let todos = this.state.todos;
    let index = todos.findIndex(x => x.id === id);
    this.setState({edit: true, editID: index}, () => {
      //console.log(this.state);
      //console.log(this.state.todos[this.state.editID]);
      localStorage.setItem('state', JSON.stringify(this.state));
    });
  }

  handleUpdateTodo(data){
    let todos = this.state.todos;
    todos[this.state.editID].detail = data;
    this.setState({todos: todos, edit: false}, () => {
      //console.log(this.state);
      localStorage.setItem('state', JSON.stringify(this.state));
    });
  }

  handleCheckTodo(id){
    let todos = this.state.todos;
    let index = todos.findIndex(x => x.id === id);
    todos[index].isDone = todos[index].isDone === true ? false : true;
    this.setState({todos: todos}, () => {
      //console.log(this.state);
      localStorage.setItem('state', JSON.stringify(this.state));
    });
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-2" />
        <div className="well col-md-8 col-xs-12">
          <AddTodo addTodo={this.handleAddTodo.bind(this)} />
          <Todos todos={this.state.todos} onDelete={this.handleDeleteTodo.bind(this)} onEdit={this.handleEditTodo.bind(this)} onCheck={this.handleCheckTodo.bind(this)}/>
          <hr />
          {this.state.edit &&
              <div>
                <TodoEdit todo={this.state.todos[this.state.editID]} onUpdate={this.handleUpdateTodo.bind(this)} />
              </div>
          }
        </div>
        <div className="col-md-2" />
      </div>
    );
  }
}

export default App;
