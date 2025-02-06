function TodoItems({item,DeleteButton}) {
    // console.log(item);
  return (
    <div className="container">
      <div className="row my_row">
        <div className="col-6">{item.todoName}</div>
        <div className="col-4">
          <p>{item.todoDate}</p>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-danger" onClick={DeleteButton}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItems;