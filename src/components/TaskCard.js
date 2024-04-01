import { useState } from "react";

export default function TaskCard({ item, handleDelete, handleEdit }) {
  const { id, taskName, dueDate } = item;
  const [checked, setChecked] = useState(false);

  return (
    <div
      style={{
        background: checked ? "gray" : "yellowgreen",
        minWidth: "200px",
        padding: "1em",
      }}
    >
      <p style={{ textDecoration: checked ? "line-through" : "" }}>
        {taskName}
      </p>
      <p style={{ textDecoration: checked ? "line-through" : "" }}>{dueDate}</p>
      <button
        onClick={() => {
          handleDelete(id);
        }}
        style={{ background: "red", color: "white", fontWeight: "700" }}
      >
        Delete Task
      </button>{" "}
      <button
        style={{ background: "green", color: "white", fontWeight: "700" }}
        onClick={() => {
          handleEdit(id);
        }}
      >
        Edit Task
      </button>
      <label style={{ marginLeft: "1em" }}>
        {checked ? "Completed" : "Not Completed"}
        <input
          type="checkbox"
          value={checked}
          onChange={() => setChecked(!checked)}
        />
      </label>
    </div>
  );
}
