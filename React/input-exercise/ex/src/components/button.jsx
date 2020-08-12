import React from "react";

export default function Button({ label, onSend }) {
  return (
    <button type="button" onClick={onSend}>
      {label}
    </button>
  );
}
