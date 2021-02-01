import React, { useState } from "react";
import ReactDOM from "react-dom";
import useInput from "./useInput";

function App() {
    const maxLen = (value) => value.length <= 10;
    const name = useInput("Mr.", maxLen);
    return (
      <div className="App">
        <h1>Hello </h1>
        <input placeholder="Name" {...name}></input>
      </div>
    );
  }
  
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />, rootElement);