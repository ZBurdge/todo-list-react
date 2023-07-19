import React, { useRef } from "react";
import ToDoList from "./ToDoList";
import "./ToDoInput.css";

export default function TodoInput(addTask) {
  const inputBoxRef = useRef(null);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addTask(inputBoxRef.current.value);
      inputBoxRef.current.value = "";
      };

  const handleAddTask = () => {
    addTask(inputBoxRef.current.value);
    inputBoxRef.current.value = "";
  };

  return (
    <div>
      <form className="row todo-input">
        <input
          type="text"
          placeholder="Enter your task"
          ref={inputBoxRef}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleAddTask}>Add</button>
      </form>
      <ToDoList />
    </div>
  );
}
