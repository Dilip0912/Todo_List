import TodoItems from "./Todoitems";
function TodoItem({item,handleDeleteClick}) {
    // console.log(item);
    function handleDelte(){

    }
  return (
    <div className="item_container">
        {/* <TodoItems item={item[0]}></TodoItems>
        <TodoItems item={item[1]}></TodoItems> */}
        {item.map((items)=>
            <TodoItems item={items} DeleteButton={()=>handleDeleteClick(items.todoName,items.todoDate)}></TodoItems>
        )}
    </div>
  );
}

export default TodoItem;