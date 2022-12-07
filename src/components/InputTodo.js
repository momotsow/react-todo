import React, { Component } from 'react';
import PropTypes from 'prop-types';
//  eslint-disable-next-line
class InputTodo extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    const { title } = this.state;
    const { addTodoProps } = this.props;
    e.preventDefault();
    addTodoProps(title);
    this.setState({
      title: '',
    });
  };

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add todo..."
          value={title}
          name="title"
          onChange={this.onChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
InputTodo.propTypes = {
  addTodoProps: PropTypes.func.isRequired,
  /* deleteTodoProps: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired, */
};
export default InputTodo;
