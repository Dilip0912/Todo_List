import { useState,useRef, useContext } from "react";
import { TodoItemContext } from "./store/Todo-item-context";
function AddTodo() {

  let todoNameRef=useRef();
  let todoDateRef=useRef();
  const {addItem}=useContext(TodoItemContext);
  // let [todoinput, setTodoInput] = useState();
  // let [tododate, setTodoDate] = useState();

  // function handleInputChange(event) {
  //   setTodoInput(event.target.value);
  // }
  // function handleDateChange(event) {
  //   setTodoDate(event.target.value);
  // }
  function handleAddButton() {
    let todoinput=todoNameRef.current.value;
    let tododate=todoDateRef.current.value;
    addItem(todoinput, tododate);
  }
  return (
    <div className="container text-center">
      <div className="row my_row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter your task"
            ref={todoNameRef}
          />
        </div>
        <div className="col-4">
          <input type="date"  ref={todoDateRef}  />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleAddButton}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
