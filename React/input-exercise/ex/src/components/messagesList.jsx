import React, { Component } from "react";

export default function MessagesList({ messages }) {
  return messages.map((msg) => <p key={msg.id}>{msg.content}</p>);
}
