import React from "react";
import "./style.css";

export default function Select({ options, name, onSelect, value }) {
  return (
    <select name={name} id={name} onChange={(e) => onSelect(e)}>
      <option value=""></option>
      {options.map((option) => (
        <option key={option.id ? option.id : option._id} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
