import React from 'react';
import Header from './Header';
import InputTodo from './InputTodo';
import TodoList from './TodoList';

//  eslint-disable-next-line
class TodoContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: 2,
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: 3,
          title: 'Deploy to live server',
          completed: false,
        },
      ],
    };
  }

  addTodoItem = (title) => {
    const newTodo = {
      id: 4,
      title,
      completed: false,
    };
    const { todos } = this.state;
    this.setState({
      todos: [...todos,
        newTodo],
    });
  };

  handleChange = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed; // eslint-disable-line no-param-reassign
          // console.log('clicked ', todo.completed);
        }
        return todo;
      }),
    });
  };

  delTodo = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: [
        ...todos.filter((todo) => todo.id !== id),
      ],
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <Header />
        <InputTodo addTodoProps={this.addTodoItem} />
        <TodoList
          todos={todos}
          handleChangeProps={this.handleChange}
          deleteTodoProps={this.delTodo}
        />
      </div>
    );
  }
}
export default TodoContainer;
