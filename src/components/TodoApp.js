import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [status, setStatus] = useState("All");

  // we watch todos and status to recognize changes

  useEffect(() => {
    filterTodos(status);
  }, [todos, status]);

  const filterTodos = (status) => {
    switch (status) {
      case "All":
        setFilteredTodos(todos);
        break;
      case "Done":
        setFilteredTodos(todos.filter((t) => t.isCompleted));
        break;
      case "Undone":
        setFilteredTodos(todos.filter((t) => !t.isCompleted));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  // todos ?
  const addTodo = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };
    // first method

    setTodos([...todos, newTodo]);

    // second method:

    // setTodos([
    //   ...todos,
    //   {
    //     id: Math.floor(Math.random() * 1000),
    //     text: input,
    //     isCompleted: false,
    //   },
    // ]);
  };

  const completeTodo = (id) => {
    // find Index
    const index = todos.findIndex((item) => item.id === id);

    // Clone of selected todo: Do Not Mutate
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;

    // Clone of all todos:
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const deleteHandler = (id) => {
    const filteredTodos = todos.filter((item) => item.id !== id);
    setTodos(filteredTodos);
  };

  const updateTodo = (id, newValue) => {
    // find Index
    const index = todos.findIndex((item) => item.id === id);

    // Clone of selected todo: Do Not Mutate
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newValue;

    // Clone of all todos:
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };
  // const editHandler = (id, newValue) => {
  //   // find Index
  //   const index = todos.findIndex((item) => item.id === id);
  //   const selectedTodo = {...todos[index]};
  //   selectedTodo.text = newValue;
  //   const updatedTodos = [...todos];
  //   updatedTodos[index] = selectedTodo;
  //   setTodos(updatedTodos);
  // }

  return (
    <div className="container">
      <Navbar
        todos={todos}
        filterTodos={filterTodos}
        status={status}
        setStatus={setStatus}
      />
      <TodoForm submitTodo={addTodo} />
      <TodoList
        todos={todos}
        onComplete={completeTodo}
        onDelete={deleteHandler}
        onUpdateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoApp;
