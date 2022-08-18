import React, { useState, createContext } from "react";

const CustomContext = createContext();
const { Provider } = CustomContext;

export default function TodoData(props) {
  const [data, setData] = useState([
    { id: 1, label: "Drink Coffee", important: false, done: false },
    { id: 2, label: "Learn React", important: false, done: false },
    { id: 3, label: "Have lunch", important: true, done: false },
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const onDelete = (id) => {
    setData((data) => {
      const idx = data.findIndex((item) => item.id === id);
      return [...data.slice(0, idx), ...data.slice(idx + 1)];
    });
  };

  const onAddTask = (body) => {
    const newTask = {
      id: Math.random(),
      label: body,
      important: false,
      done: false,
    };
    setData(() => {
      return [...data, newTask];
    });
  };

  const onToggleProperty = (arr, property, id) => {
    const idx = arr.findIndex((item) => item.id === id);
    const newTask = { ...arr[idx], [property]: !arr[idx][property] };
    return [...arr.slice(0, idx), newTask, ...arr.slice(idx + 1)];
  };

  const onImportant = (id) => {
    setData(() => {
      return onToggleProperty(data, "important", id);
    });
  };

  const onDone = (id) => {
    setData(() => {
      return onToggleProperty(data, "done", id);
    });
  };

  const onSearch = (arr, value) => {
    return value.length
      ? arr.filter(
          (item) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1
        )
      : arr;
  };

  const onFilter = (arr, value) => {
    switch (value) {
      case "active":
        return arr.filter((item) => !item.done);
      case "done":
        return arr.filter((item) => item.done);
      default:
        return arr;
    }
  };

  const setSearchItem = (item) => {
    setSearch(item);
  };

  const setFilterItem = (item) => {
    setFilter(item);
  };

  const datas = onFilter(onSearch(data, search), filter);

  const todoDetails = () => {
    return {
      todos: data.length,
      done: data.filter((item) => item.done).length,
    };
  };

  const values = {
    filter,
    datas,
    onDelete,
    onImportant,
    onDone,
    onAddTask,
    onSearch,
    todoDetails,
    setSearchItem,
    setFilterItem,
  };

  return <Provider value={values}>{props.children}</Provider>;
}

export { CustomContext };
