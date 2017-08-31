import React, { Component } from 'react';

class TodoEdit extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: this.props.todo.detail,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.todo.detail,
    })
  }

  handleSubmit(e){
    this.props.onUpdate(this.state.data);
    e.preventDefault();
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    // this.setState({title: event.target.value});

  }

  render() {
    return (
      <div>
        <h3>Todo Detail</h3>
        <form onSubmit={this.handleSubmit.bind(this)} className="form-horizontal">
          <div className="form-group">
            <lable className="control-label col-md-2 col-xs-2"><strong>Title: </strong></lable>
            <div className="col-md-10 col-xs-10">
              <input type="text" className="form-control" disabled value={this.props.todo.title} />
            </div>
          </div>
          <div className="form-group">
            <lable className="control-label col-md-2 col-xs-2"><strong>ID: </strong></lable>
            <div className="col-md-10 col-xs-10">
              <input type="text" className="form-control" disabled value={this.props.todo.id} />
            </div>
          </div>
          <div className="form-group">
            <lable className="control-label col-md-2 col-xs-2"><strong>Date: </strong></lable>
            <div className="col-md-10 col-xs-10">
              <input type="text" className="form-control" disabled value={this.props.todo.date} />
            </div>
          </div>
          <div className="form-group">
            <lable className="control-label col-md-2 col-xs-2"><strong>Detail: </strong></lable>
            <div className="col-md-10 col-xs-10">
              <textarea name="data" className="form-control" ref="detail" rows="3" value={this.state.data} onChange={this.handleChange} />
            </div>
          </div>
          <button type="submit" className="btn btn-success btn-sm">Update</button>
          <br />
        </form>
      </div>
    );
  }
}

export default TodoEdit;
