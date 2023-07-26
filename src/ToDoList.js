import React from "react";
import "./ToDoList.css";
import ToDoItem from "./ToDoItem";

export default function ToDoList({ taskList, toggleTask, removeTask }) {
  if (!Array.isArray(taskList)) {
    return <div>No tasks found.</div>;
  }
  return (
    <ul>
      {taskList.map((task) => (
        <ToDoItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          removeTask={removeTask}
        />
      ))}
    </ul>
  );
}
