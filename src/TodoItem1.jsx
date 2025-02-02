function TodoItem1() {
  return (
    <div className="container">
      <div class="row my_row">
        <div class="col-6">Trip</div>
        <div class="col-4">
          <p>18/02/25</p>
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
