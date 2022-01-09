import { useState } from "react";

const Navbar = ({ todos, filterTodos, status, setStatus }) => {
  const doneTodo = todos.filter((item) => item.isCompleted === true).length;
  const undoneTodo = todos.filter((item) => item.isCompleted === false).length;

//   const Options = [
//     { value: "All", label: "All" },
//     { value: "Done", label: "Done" },
//     { value: "Undone", label: "Undone" },
//   ];
  
  const changeHandler = (e) => {
    setStatus(e.target.value);
    filterTodos(e.target.value);
  };

  return (
    <header>
      {undoneTodo ? (
        <div className="taskContainer">
          <select onChange={changeHandler} value={status}>
              <option value="All">All</option>
              <option value="Done">Done</option>
              <option value="Undone">Undone</option>

          </select>
          <span>{doneTodo}</span>
          <h2>Done</h2>
          <span>{undoneTodo}</span>
          <h2>Undone</h2>
        </div>
      ) : (
        <>
          <h2>set your Daily Todos !</h2>
        </>
      )}
    </header>
  );
};

export default Navbar;
