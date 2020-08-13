import React from "react";

export default function Input({ type, name, id, value, onChange }) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={(e) => onChange(e)}
    />
  );
}
