// src/components/ToDoForm.jsx
import React, { useState } from 'react'; // useState понадобится для управления вводом

// Принимаем addTask как пропс из App.jsx
const ToDoForm = ({ addTask }) => {
  const [inputValue, setInputValue] = useState(''); // Состояние для текста в поле ввода

  const handleSubmit = (event) => {
    event.preventDefault(); // Предотвращаем перезагрузку страницы при отправке формы
    if (inputValue.trim() === '') return; // Не добавляем пустые задачи
    addTask(inputValue); // Вызываем функцию addTask из App.jsx
    setInputValue(''); // Очищаем поле ввода после добавления
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Add a new task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default ToDoForm;