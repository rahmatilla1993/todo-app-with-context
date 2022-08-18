import React, { useContext, useState } from "react";
import { CustomContext } from "../context/todo-data/";

import "./search-panel.css";

const SearchPanel = () => {
  const [value, setValue] = useState("");
  const { setSearchItem } = useContext(CustomContext);

  const onChangeHandler = ({ target }) => {
    const item = target.value;
    setValue(item);
    setSearchItem(item);
  };

  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="type to search"
      value={value}
      onChange={onChangeHandler}
    />
  );
};

export default SearchPanel;
