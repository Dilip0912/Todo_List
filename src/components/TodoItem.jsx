import { TodoItemContext } from "../store/Todo-item-context";
import TodoItems from "./Todoitems";
import { useContext } from "react";

function TodoItem() {
    
  const {item}=useContext(TodoItemContext);
  const {deleteItem}=useContext(TodoItemContext);
  // console.log(item);
  return (
    <div className="item_container">
        {/* <TodoItems item={item[0]}></TodoItems>
        <TodoItems item={item[1]}></TodoItems> */}
        {item.map((items)=>
            <TodoItems item={items}></TodoItems>
        )}
    </div>
  );
}

export default TodoItem;