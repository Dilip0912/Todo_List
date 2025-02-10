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
import { TodoItemContext } from "./store/Todo-item-context";

function App() {
  let [item, setItem] = useState([]);
  function addItem(todoname, tododate) {
    let newTodoItems = [...item, { todoName: todoname, todoDate: tododate }];
    setItem(newTodoItems);
  }

  let itemCopy = item;
  function deleteItem(todoname, tododate) {
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
    <TodoItemContext.Provider value={{ item, addItem, deleteItem }}>
      <center className="todo_container">
        <AppName />
        <AddTodo />
        <TodoItem></TodoItem>
        {item.length === 0 ? <NoTask></NoTask> : ""}
      </center>
    </TodoItemContext.Provider>
  );
}

export default App;
