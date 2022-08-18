import React, { useContext } from "react";
import { CustomContext } from "../context/todo-data/";
import TodoListItem from "../todo-list-item";
import "./todo-list.css";

const TodoList = () => {
  const { datas } = useContext(CustomContext);

  const elements = datas.map((item) => {
    const { ...itemProps } = item;
    const { id } = itemProps;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem {...itemProps} />
      </li>
    );
  });

  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;
