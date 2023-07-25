import React, { useState } from "react";
import "./ToDoInput.css";

export default function TodoInput({ addTask }) {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === '') {
      return alert('need note');
    }
    addTask(task);
    setTask("");
  };

  return (
    <div className="row todo-input">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your task"
          value={task}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
