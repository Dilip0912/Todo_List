import { useContext } from "react";
import { TodoItemContext } from "../store/Todo-item-context";

function TodoItems({item}) {
    // console.log(item);
  const {deleteItem}=useContext(TodoItemContext); 
  return (
    <div className="container">
      <div className="row my_row">
        <div className="col-6">{item.todoName}</div>
        <div className="col-4">
          <p>{item.todoDate}</p>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-danger" onClick={()=>deleteItem(item.todoName,item.todoDate)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItems;