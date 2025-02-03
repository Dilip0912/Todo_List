import TodoItems from "./Todoitems";
function TodoItem({item}) {
    console.log(item);
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