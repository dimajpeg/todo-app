// src/components/ToDoForm.jsx
import React from 'react'; // Можно и без этого импорта в новых версиях React/Vite, но лучше оставить

const ToDoForm = () => {
  // Твоя логика формы будет здесь позже
  return (
    <form>
      <input type="text" placeholder="Add a new task" />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default ToDoForm; // <-- ВОТ ЭТА СТРОКА КРИТИЧЕСКИ ВАЖНА