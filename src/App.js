import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="ToDoApp">
          <header>
            <h2>To-Do List</h2>
            <FontAwesomeIcon icon={faListCheck} style={{ color: "#ffb6c1" }} />
          </header>
          <ToDoInput />
          <ToDoList />
        </div>
        <footer>
          Coded by Zgene' Burdge and open sourced on
          <a href="https://github.com/ZBurdge/To-do-List.git" target="_blank">
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
