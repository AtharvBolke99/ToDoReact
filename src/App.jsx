import React, { useEffect, useState } from "react";
import "./App.css";
import TaskCard from "./components/TaskCard.jsx";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const savedTask = JSON.parse(localStorage.getItem("tasks"));
    if (savedTask) {
      setTasks(savedTask);
    }
  }, []);

  const addTask = () => {
    const newTaskObj = [newTask, ...tasks];
    if (newTask.trim() === "") {
      toast.error("Enter The Task !");
      return;
    }
    setTasks(newTaskObj);
    localStorage.setItem("tasks", JSON.stringify(newTaskObj));
    //if won't give the square bracket the it will show tasks.map is not a function....
    setNewTask("");
  };

  return (
    <div className="main">
      <Toaster />
      <h1 className="heading">ToDo App</h1>
      <p className="sub-heading">
        A <span className="highlight">powerful</span> yet simple task manager
        designed to help you stay organized and accomplish more every single
        day.
      </p>

      <div className="input-container">
        <div className="task-container">
          <span className="input-heading">My Tasks</span>
          <input
            className="input-task"
            type="text"
            placeholder="Enter the task"
            value={newTask}
            onChange={(e) => {
              const addTask = e.target.value;
              setNewTask(addTask);
              localStorage.setItem("tasks", JSON.stringify(tasks));
            }}
          />
          <button className="btn" onClick={addTask}>
            Add Task
          </button>
          <div className="task-card">
            {tasks.length === 0 ? (
              <p style={{ color: "gray", fontSize: "20px", textAlign:"center" }}>
                No tasks yet. Add one to get started! ✨{" "}
              </p>
            ) : null}
            {tasks.map((task, index) => {
              return (
                <TaskCard
                  key={index}
                  task={task}
                  tasks={tasks}
                  setTasks={setTasks}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
