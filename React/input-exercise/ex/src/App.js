import React, { useState } from "react";
import "./App.css";
import Input from "./components/input";
import Button from "./components/button.jsx";
import MessagesList from "./components/messagesList";

let id = 0;
function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleMessageInput = (e) => {
    setMessage(e.currentTarget.value);
  };

  const handleClick = () => {
    const msgObj = {
      id: id++,
      content: message,
    };
    setMessages([...messages, msgObj]);
    setMessage("");
  };

  return (
    <div className="App">
      <Input
        type="text"
        id="message"
        name="message"
        value={message}
        onChange={handleMessageInput}
      ></Input>
      <Button label="Send" onCLick={handleClick} onSend={handleClick}></Button>
      <MessagesList messages={messages}></MessagesList>
    </div>
  );
}

export default App;
