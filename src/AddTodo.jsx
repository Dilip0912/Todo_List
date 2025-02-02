function AddTodo() {
  return (
    <div class="container text-center">
      <div class="row my_row">
        <div class="col-6">
          <input type="text" placeholder="Enter your task" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-primary">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
