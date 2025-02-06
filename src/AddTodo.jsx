import { useState } from "react";
function AddTodo({handleClick}) {

  let [todoinput,setTodoInput]=useState();
  let [tododate,setTodoDate]=useState();

  function handleInputChange(event){
    setTodoInput(event.target.value)
  }
  function handleDateChange(event){
    setTodoDate(event.target.value)

  }
  function handleAddButton(){
    handleClick(todoinput,tododate);
  }
  return (
    <div className="container text-center">
      <div className="row my_row">
        <div className="col-6">
          <input type="text" placeholder="Enter your task" onChange={handleInputChange} />
        </div>
        <div className="col-4">
          <input type="date"  onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-primary" onClick={handleAddButton}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
