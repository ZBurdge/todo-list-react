import React, { useState, useEffect } from "react";
import "./ToDoList.css";
import ToDoItem from "./ToDoItem";

export default function ToDoList() {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    showTask();
  }, []);

  const addTask = (task) => {
    if (task.trim() === "") {
      alert("Please enter your task");
    } else {
      const newTask = { id: DataTransfer.now(), task, checked: false };
      setTaskList((prevTaskList) => [...prevTaskList, newTask]);
    }
    saveData();
  };

  const toggleTask = (taskId) => {
    setTaskList((prevTaskList) =>
      prevTaskList.map((task) => {
        if (task.id === taskId) {
          return { ...task, checked: !task.checked };
        }
        return task;
      })
    );
    saveData();
  };

  const removeTask = (taskId) => {
    setTaskList((prevTaskList) =>
      prevTaskList.filter((task) => task.id !== taskId)
    );
    saveData();
  };

  const saveData = () => {
    localStorage.setItem("data", JSON.stringify(taskList));
  };

  const showTask = () => {
    const savedData = localStorage.getItem("data");
    if (savedData) {
      setTaskList(JSON.parse(savedData));
    }
  };

  return (
    <div>
      <ul id="todo-list">
        {taskList.map((task) => (
          <ToDoItem
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            removeTask={removeTask}
          />
        ))}
      </ul>
    </div>
  );
}
