import React from 'react';
import PropTypes from 'prop-types';

function TodoItem(props) {
  const { todo, handler, deleteHandler } = props;
  return (
    <li key={todo.id}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handler(todo.id)}
      />
      {todo.title}
      <button type="button" onClick={() => deleteHandler(todo.id)}>
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
  /* handleUpdate: PropTypes.func.isRequired, */
};
export default TodoItem;
