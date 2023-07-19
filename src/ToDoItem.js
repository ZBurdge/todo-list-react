import React from "react";

export default function ToDoItem({ task, toggleTask, removeTask }) {
  const handleToggle = () => {
    toggleTask(task.id);
  };
  const handleRemove = () => {
    removeTask(task.id);
  };

  return (
    <li className={task.checked ? "checked" : ""} onClick={handleToggle}>
      {task.task}
      <span onClick={handleRemove}>&times;</span>
    </li>
  );
}
