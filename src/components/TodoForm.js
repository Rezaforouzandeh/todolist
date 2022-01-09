import { useEffect, useRef, useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.text : "");

  const inputRef = useRef(null);

  useEffect(()=>{
    inputRef.current.focus();
  },[])

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault(); // to prevent form from refreshing
    if (!input) {
      alert("Please Enter Todo ...");
      return;
    }
    props.submitTodo(input); // add or update
    inputRef.current.focus();
    setInput("");
    // add entered todo to todoes
  };
  return (
    <form onSubmit={submitHandler}>
        <div className="formControl">
          <input
            type="text"
            value={input}
            onChange={changeHandler}
            placeholder={props.edit ? "Update value ..." : "Add new Todo"}
            ref={inputRef}
            />
          <button className={`btn ${props.edit ? "updateTodo" : "addTodo"}`} type="submit">{props.edit ? "Update" : "Add"}</button>
        </div>
    </form>
  );
};

export default TodoForm;
