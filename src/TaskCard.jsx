import React from "react";
import "./TaskCard.css";
import { Trash2 } from "lucide-react";

function TaskCard({ task, tasks, setTasks }) {
  const deleteTask = () => {
    const deleteTask = tasks.filter((t) => t !== task);
    setTasks(deleteTask);
    localStorage.setItem("tasks",JSON.stringify(deleteTask));
  };
  return (
    <div className="task">
      <span>{task}</span>
      <Trash2 className="delete-icon" onClick={deleteTask} />
    </div>
  );
}

export default TaskCard;
