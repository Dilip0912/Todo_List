import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppName from "./AppName";
import TodoItem1 from "./TodoItem1";
import TodoItem2 from "./TodoItem2";
import AddTodo from "./AddTodo";

function App() {
  return (
    <center className="todo_container">
      <AppName />
      <AddTodo />
      <div className="item_container">
        <TodoItem1 />
        <TodoItem2 />
      </div>
    </center>
  );
}

export default App;
