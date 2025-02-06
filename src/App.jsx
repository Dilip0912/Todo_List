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

    // console.log(item);
    function handleOnDeleteClick(todoname,tododate){
      // console.log(todoname,tododate);
      // let removingElement={todoName:todoname,todoDate:tododate}
      
      // let index=item.findIndex(items=>items.todoName===removingElement.todoName && items.todoDate===removingElement.todoDate)
      // console.log(index);
      // let itemCopy=item;
      // console.log(itemCopy);
      // itemCopy.splice(index,1);
      let newArr=item.filter(items=>items.todoName!==removingElement.todoName || items.todoDate!==removingElement.todoDate)
      // console.log(newArr);
      setItem(newArr);
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