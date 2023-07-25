import React, { useState, useEffect } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";

export default function App() {
  const [taskList, setTaskList] = useState([]);

  const addTask = (task) => {
    if (task.trim() === "") {
      alert("Please enter your task.");
    } else {
      const newTask = { id: Date.now(), task, checked: false };
      setTaskList((prevTaskList) => [...prevTaskList, newTask]);
    }
  };

  const toggleTask = (taskId) => {
    setTaskList((prevTaskList) =>
      prevTaskList.map((task) => ({
        ...task,
        checked: task.id === taskId ? !task.checked : task.checked,
      }))
    );
  };

  const removeTask = (taskId) => {
    setTaskList((prevTaskList) =>
      prevTaskList.filter((task) => task.id !== taskId)
    );
  };

  const showTask = () => {
    let savedData = JSON.parse(localStorage.getItem("data"));
    console.log("Saved Data from localStorage:", savedData);
    if (savedData) {
      setTaskList(savedData);
    }
  };

  useEffect(() => {
    showTask();
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <div className="App">
      <div className="container">
        <div className="ToDoApp">
          <header>
            <h2>
              To-Do List{" "}
              <FontAwesomeIcon
                icon={faListCheck}
                style={{ color: "#ffb6c1" }}
              />
            </h2>
          </header>
          <ToDoInput addTask={addTask} />
          <ToDoList
            taskList={taskList}
            toggleTask={toggleTask}
            removeTask={removeTask}
          />
        </div>
        <footer>
          Coded by Zgene' Burdge and open sourced on
          <a
            href="https://github.com/ZBurdge/To-do-List.git"
            target="_blank"
            rel="noreferrer"
          >
            {""} GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
