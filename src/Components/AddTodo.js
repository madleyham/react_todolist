import React, { Component } from 'react';
import uuid from 'uuid';

class AddTodo extends Component {
  constructor(){
    super();
    this.state = {
      newTodo:{}
    };
  }

  handleSubmit(e){
    if(this.refs.title.value === ''){
      alert('Task is required');
    } else {
      this.setState({newTodo:{
        id: uuid.v4(),
        title: this.refs.title.value,
        detail: '',
        date: new Date().toLocaleString(),
        isDone: false
      }}, function(){
        //console.log(this.state);
        this.props.addTodo(this.state.newTodo);
        this.refs.title.value = '';
      });
    }
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <h1>Todo List Web Application</h1>
        </div>
        <form onSubmit={this.handleSubmit.bind(this)} >
          <div className="form-group">
            <div className="col-md-10">
              <input type="text" ref="title" className="form-control" placeholder="What do you need to do?" />
            </div>
            <div className="col-md-2">
              <button type="submit" className="btn btn-default"><span className="glyphicon glyphicon-plus"></span> Add</button>
            </div>
          </div>
        </form>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default AddTodo;
