// src/components/ToDoItem.jsx
import React from 'react';

const ToDoItem = ({ task, toggleTask, deleteTask }) => {
  // На этом этапе нам просто нужно, чтобы компонент существовал и что-то возвращал.
  // Позже ты заменишь это на реальную разметку задачи.
  if (!task) {
    return null; // Если задача не передана, ничего не рендерим
  }

  return (
    <li>
      {task.text}
      {/* Сюда позже добавим чекбокс и кнопку удаления */}
    </li>
  );
};

export default ToDoItem; // <--- Вот эта строка исправляет ошибку