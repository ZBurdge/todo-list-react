import React, { useState, useEffect } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";

const storage_key = "taskList";

function saveData(data) {
  try {
    localStorage.setItem(storage_key, JSON.stringify(data));
  } catch (e) {
    console.log("oops");
  }
}
function getData(key) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.log("oops");
    return [];
  }
}

export default function App() {
  const [taskList, setTaskList] = useState(() => getData(storage_key));

  const addTask = (task) => {
    const newTask = { id: Date.now(), task, checked: false };
    setTaskList((prevTaskList) => [...prevTaskList, newTask]);
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

  useEffect(() => {
    saveData(taskList);
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
