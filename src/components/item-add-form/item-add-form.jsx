import React, { useState, useContext } from "react";
import { CustomContext } from "../context/todo-data/";
import "./item-add-form.css";

export default function ItemAddForm() {
  const [value, setValue] = useState("");
  const { onAddTask } = useContext(CustomContext);

  const onChangeHandler = ({ target }) => {
    setValue(target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onAddTask(value);
    setValue("");
  };

  return (
    <form action="" className="item-add-form d-flex" onSubmit={onSubmitHandler}>
      <input
        type="text"
        className="form-control"
        placeholder="Writing task..."
        value={value}
        onChange={onChangeHandler}
      />
      <button type="submit" className="btn btn-info">
        Add
      </button>
    </form>
  );
}
