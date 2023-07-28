import React from "react";
import "./ToDoList.css";
import ToDoItem from "./ToDoItem";

export default function ToDoList({ taskList, toggleTask, removeTask }) {
  if (!taskList || taskList.length === 0) {
    return <div>No tasks to display</div>;
  } else {
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
}
