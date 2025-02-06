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
  // let item = ;
  let [item,setItem] = useState([
    {
      todoName: "Trip",
      todoDate: "24/02/25",
    },
    {
      todoName: "Ride",
      todoDate: "12/03/25",
    },
  ]);
  function handleOnClick(todoname,tododate){
    let newTodoItems=[...item,{"todoName":todoname,"todoDate":tododate}]
    // console.log(newTodoItems);
    setItem(newTodoItems);
  }


  return (
    <center className="todo_container">
      <AppName />
      <AddTodo handleClick={handleOnClick}/>
      <TodoItem item={item} handleDeleteClick={handleOnDeleteClick}></TodoItem>
    </center>
  );
}

export default App;
