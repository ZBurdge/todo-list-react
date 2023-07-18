import React from "react";
import "./ToDoInput.css";

export default function ToDoInput() {
  return (
    <div className="row todo-input">
      <input type="text" placeholder="Enter your task" id="input-box" />
      <button onclick="addTask()">Add</button>
    </div>
  );
}
