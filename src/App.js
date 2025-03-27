import "./App.css";
import { useRef, useState } from "react";
import { ClipboardList, X } from "lucide-react"

function App() {
  const [tasks, setTasks] = useState([]);
  const inputRef = useRef();

  const handleAddTask = () => {
    const text = inputRef.current.value;
    const newTask = { completed: false, text };
    setTasks([...tasks, newTask]);
    inputRef.current.value = "";
  };

  const handleItemDone = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const handleDeleteItem = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className="App">
      <ClipboardList/> <h2> To Do List</h2>
      <div className="tasks-container">
        <ul>
          {tasks.map(({ text, completed }, index) => {
            return (
              <div className="item">
                <li
                  className={completed ? "done" : ""}
                  key={index}
                  onClick={() => handleItemDone(index)}
                >
                  {text}
                </li>
                <span className="trash" onClick={() => handleDeleteItem(index)}>
                  <X/>
                </span>
              </div>
            );
          })}
        </ul>
        <input
          onKeyDown={handleKeyDown}
          ref={inputRef}
          placeholder="Enter task..."
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
    </div>
  );
}

export default App;
