import React, { useContext } from "react";
import { CustomContext } from "../context/todo-data/";
import "./app-header.css";

const AppHeader = () => {
  const { todoDetails } = useContext(CustomContext);
  const { todos, done } = todoDetails();

  return (
    <div className="app-header d-flex">
      <h1>Todo List</h1>
      <h2>
        {todos} more to do, {done} done
      </h2>
    </div>
  );
};

export default AppHeader;
