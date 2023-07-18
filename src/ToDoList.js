import React from "react";
import "./ToDoList.css";

export default function ToDoList() {
  const todoList = document.getElementById("todo-list");

  todoList.addEventListener(
    "click",
    function (event) {
      if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
        saveData();
      } else if (event.target.tagName === "SPAN") {
        event.target.parentElement.remove();
        saveData();
      }
    },
    false
  );

  function saveData() {
    localStorage.setItem("data", todoList.innerHTML);
  }

  function showTask() {
    todoList.innerHTML = localStorage.getItem("data");
  }

  showTask();

  return (
    <div>
      <ul id="todo-list">
        {/* <li class="checked">Task 1</li>
          <li>Task 2</li>
  <li>Task 3</li> */}
      </ul>
    </div>
  );
}
