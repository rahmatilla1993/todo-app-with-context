import React from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import TodoData from "../context/todo-data/";
import ItemAddForm from "../item-add-form/";

import "./app.css";

const App = () => {
  return (
    <TodoData>
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList />
        <ItemAddForm />
      </div>
    </TodoData>
  );
};

export default App;
