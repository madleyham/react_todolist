import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {
  deleteTodo(id){
  	this.props.onDelete(id);
  }

  editTodo(id){
  	this.props.onEdit(id);
  }

  checkTodo(id){
  	this.props.onCheck(id);
  }

  render() {
  	let todoItems;
  	if(this.props.todos){
  		todoItems = this.props.todos.map(todo => {
  			return(
  				<TodoItem onDelete={this.deleteTodo.bind(this)} onEdit={this.editTodo.bind(this)} onCheck={this.checkTodo.bind(this)} key={todo.id} todo={todo} />
  			);
  		});
  	}
    return (
      <div className="list-group">
        {todoItems}
      </div>
    );
  }
}



export default Todos;
