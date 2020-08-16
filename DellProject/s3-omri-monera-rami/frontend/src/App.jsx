import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  useEffect(() => {
    fetch("/test").then().catch();
  });
  return <div className="App"></div>;
}

export default App;
