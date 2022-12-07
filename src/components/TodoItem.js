import React from 'react';
import PropTypes from 'prop-types';

function TodoItem(props) {
  const { todo, handler, deleteHandler } = props;
  const listStyle = {
    marginLeft: '20px',
  };
  return (
    <li key={todo.id}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handler(todo.id)}
      />
      {todo.title}
      <button type="button" onClick={() => deleteHandler(todo.id)} style={listStyle}>
        Delete
      </button>
    </li>
  );
}
TodoItem.propTypes = {
  todo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      completed: PropTypes.bool,
    }),
  ).isRequired,
  handler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};
export default TodoItem;
