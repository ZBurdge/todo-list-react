import React from "react";
import ToDoList from "./ToDoList";
import "./ToDoInput.css";

export default function ToDoInput() {
  const inputBox = document.getElementById("input-box");
  const todoList = document.getElementById("todo-list");

  function addTask() {
    if (inputBox.value === "") {
      alert("Please enter your task.");
    } else {
      let li = document.createElement("li");
      li.innerHTML = inputBox.value;
      todoList.appendChild(li);
      let span = document.createElement("span");
      span.innerHTML = "\u00d7";
      li.appendChild(span);
    }
    inputBox.value = "";
  }

  inputBox.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addTask();
    }
  });

  return (
    <div>
      <div className="row todo-input">
        <input type="text" placeholder="Enter your task" id="input-box" />
        <button onclick="addTask()">Add</button>
      </div>
      <ToDoList />
    </div>
  );
}
