import React, { useContext } from "react";
import { CustomContext } from "../context/todo-data/";

import "./item-status-filter.css";

const ItemStatusFilter = () => {
  const { filter, setFilterItem } = useContext(CustomContext);

  const buttons = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "done", label: "done" },
  ];

  return (
    <div className="btn-group">
      {buttons.map(({ name, label }) => {
        const active = filter === name ? "btn-info" : "btn-outline-secondary";
        return (
          <button
            key={name}
            className={`btn ${active}`}
            onClick={() => setFilterItem(name)}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default ItemStatusFilter;
