const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
  return (
    <div className="todo" key={todo.id}>
      <div className={`todoText ${todo.isCompleted ? "completed" : "uncompleted"}`}>
        {todo.text}
      </div>
      <div>
        <button className="btn" onClick={onEdit}>Edit</button>
        <button onClick={onDelete} className="btn remove">Delete</button>
        <button onClick={onComplete} className="btn done">
          {todo.isCompleted ? "UnDone" : "Done"}
        </button>
      </div>
    </div>
  );
}; 

export default Todo;
