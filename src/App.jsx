import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppName from "./AppName";
import AddTodo from "./AddTodo";
import TodoItem from "./components/TodoItem";
import NoTask from "./components/NoTask";

function App() {
  let [item, setItem] = useState([]);
  function handleOnClick(todoname, tododate) {
    let newTodoItems = [...item, { todoName: todoname, todoDate: tododate }];
    setItem(newTodoItems);
  }

  let itemCopy = item;
  function handleOnDeleteClick(todoname, tododate) {
    let index = itemCopy.findIndex(
      (items) => items.todoName === todoname && items.todoDate === tododate
    );

    itemCopy = itemCopy.filter((items, i) => i !== index);
    console.log(itemCopy);

    // let newArr=item.filter(items=>items.todoName!==removingElement.todoName || items.todoDate!==removingElement.todoDate)
    // console.log(newArr);
    // setItem(newArr);
    setItem(itemCopy);
  }

  return (
    <center className="todo_container">
      <AppName />
      <AddTodo handleClick={handleOnClick} />
      <TodoItem item={item} handleDeleteClick={handleOnDeleteClick}></TodoItem>
      {item.length===0?<NoTask></NoTask>:""}
    </center>
  );
}

export default App;