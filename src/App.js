import "./App.css";
import AddNewTask from "./components/AddNewTask";
import TaskList from "./components/TaskList";

import { useState } from "react";

export default function App() {
  const [taskListArr, setTaskListArr] = useState([]);
  const handleEdit = (id) => {
    const updatedTaskName = prompt("Edit your Task Name");
    const updatedTaskList = taskListArr.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          taskName: updatedTaskName,
        };
      }
      return item;
    });
    setTaskListArr(updatedTaskList);
  };
  const handleDelete = (id) => {
    const filteredArray = taskListArr.filter((item) => {
      return item.id !== id;
    });
    setTaskListArr(filteredArray);
  };
  function addToList(data) {
    setTaskListArr((Currdata) => [...Currdata, data]);
  }
  return (
    <div>
      <AddNewTask AddToList={addToList} />
      <TaskList
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        taskData={taskListArr}
      />
    </div>
  );
}
