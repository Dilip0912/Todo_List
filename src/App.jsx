import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppName from "./AppName";
import AddTodo from "./AddTodo";
import TodoItem from "./components/TodoItem";

function App() {
  let item = [
    {
      todoName: "Trip",
      todoDate: "24/02/25",
    },
    {
      todoName: "Ride",
      todoDate: "12/03/25",
    },
  ];

  return (
    <center className="todo_container">
      <AppName />
      <AddTodo />
      <TodoItem item={item}></TodoItem>
    </center>
  );
}

export default App;
