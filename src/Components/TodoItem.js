import React, { Component } from 'react';


class TodoItem extends Component {
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
    let checked = this.props.todo.isDone === false ? 'list-group-item' : 'list-group-item list-group-item-success';
  	return (
      <li className={checked}>
        <span className="pull-left">
          <button type="button" onClick={this.checkTodo.bind(this, this.props.todo.id)} className="btn btn-primary btn-xs"><span className="glyphicon glyphicon-ok"></span></button>
        </span>
        <strong>{this.props.todo.title}</strong> - <small>{this.props.todo.detail}</small>
        <span className="pull-right">
          <button type="button" onClick={this.editTodo.bind(this, this.props.todo.id)} className="btn btn-warning btn-xs "><span className="glyphicon glyphicon-edit"></span> Detail</button> &nbsp;
          <button type="button" onClick={this.deleteTodo.bind(this, this.props.todo.id)} className="btn btn-danger btn-xs"><span className="glyphicon glyphicon-remove"></span> Delete</button>
        </span>
      </li>
    );
  }
}


export default TodoItem;
