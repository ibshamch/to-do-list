import { useState } from "react";

function AddNewTask({ AddToList }) {
  const [taskName, setTaskName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      taskName: taskName,
      dueDate: dueDate,
      id: Date.now(),
    };
    AddToList(newTask);
    setTaskName("");
    setDueDate("");
  };
  const handleInput = (e) => {
    if (e.target.name === "task-name") {
      setTaskName(e.target.value);
    } else if (e.target.name === "due-date") {
      setDueDate(e.target.value);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="task-name"
        value={taskName}
        onChange={handleInput}
        type="text"
        placeholder="Name of the Task"
      />
      <input
        name="due-date"
        type="text"
        placeholder="Due Date"
        value={dueDate}
        onChange={handleInput}
      />
      <button>Add New Task</button>
    </form>
  );
}
export default AddNewTask;
