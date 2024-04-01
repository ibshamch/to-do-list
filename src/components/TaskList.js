import TaskCard from "./TaskCard";
function TaskList({ taskData, handleDelete, handleEdit }) {
  return (
    <div
      className="task-list"
      style={{
        display: "flex",
        gap: "20px",
        marginTop: "10px",
        flexWrap: "wrap",
      }}
    >
      {taskData.map((item) => {
        return (
          <TaskCard
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            key={item.id}
            item={item}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
