// src/components/ToDoItem.jsx
// import React from 'react'; // Необязателен в новых версиях React/Vite, если не используется JSX напрямую (здесь используется)

export default function ToDoItem({ task, toggleTask, deleteTask }) {
  return (
    <li className={`todo-item ${task.completed ? "completed" : ""}`}>
      <span onClick={() => toggleTask(task.id)} style={{ cursor: 'pointer', textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}