import React, { useContext } from "react";
import { CustomContext } from "../context/todo-data";

import "./todo-list-item.css";

const TodoListItem = ({ id, label, important, done }) => {
  const { onDelete, onImportant, onDone } = useContext(CustomContext);

  let clazz = important ? "important " : "";
  clazz += done ? "done" : "";

  return (
    <span className={`todo-list-item ${clazz}`}>
      <span className="todo-list-item-label" onClick={() => onDone(id)}>
        {label}
      </span>

      <button
        type="button"
        className="btn btn-outline-success btn-sm float-end"
        onClick={() => onImportant(id)}
      >
        <i className="fa fa-exclamation" />
      </button>

      <button
        type="button"
        className="btn btn-outline-danger btn-sm float-end"
        onClick={() => onDelete(id)}
      >
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

export default TodoListItem;
