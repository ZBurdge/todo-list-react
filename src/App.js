import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App container">
      <header>
        <h2>To-Do List</h2>
        <FontAwesomeIcon icon={faListCheck} style={{ color: "#ffb6c1" }} />
      </header>
    </div>
  );
}

export default App;
