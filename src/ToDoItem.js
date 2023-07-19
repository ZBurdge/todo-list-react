import React from "react";

export default function ToDoItem({ task, toggleTask, removeTask }) {
  return (
    <li
      className={task.checked ? "checked" : ""}
      onClick={() => toggleTask(task.id)}
    >
      {task.task}
      <span onClick={() => removeTask(task.id)}>&times;</span>
    </li>
  );
}
