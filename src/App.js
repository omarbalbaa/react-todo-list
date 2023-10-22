import "./App.css";
import { useRef, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const inputRef = useRef();

  const handleAddTask = () => {
    const text = inputRef.current.value;
    const newTask = {completed: false, text}
    setTasks([...tasks, newTask]);
    inputRef.current.value = "";
  };

  const handleItemDone = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  }

  return (
    <div className="App">
      <h2>To Do List</h2>
      <div className="to-do-container">
        <ul>
          {tasks.map(({text, completed}, index) => {
            return <li className={completed ? "done" : ""} key={index} onClick={()=>handleItemDone(index)}>{text}</li>;
          })}
        </ul>
        <input ref={inputRef} placeholder="Enter task..." />
        <button onClick={handleAddTask}>Add</button>
      </div>
    </div>
  );
}

export default App;
