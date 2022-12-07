import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodoList(props) {
  const { todos, handleChangeProps, deleteTodoProps } = props;
  const todoStyle = {
    padding: '20px 30px',
    lineHeight: '1.5em',
  };
  return (
    <ul style={todoStyle}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handler={handleChangeProps}
          deleteHandler={deleteTodoProps}
        />
      ))}
    </ul>
  );
}
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    }),
  ).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
};
export default TodoList;
