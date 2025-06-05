import { useState } from "react";

export default function ToDoForm({ addTask }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return; // Если текст пустой (после удаления пробелов), ничего не делаем
    addTask(text); // Вызываем функцию addTask, переданную из App.jsx
    setText(""); // Очищаем поле ввода
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={text} // Значение инпута привязано к состоянию text
        onChange={(e) => setText(e.target.value)} // Обновляем состояние text при каждом изменении в инпуте
        placeholder="Додати завдання..."
      />
      <button type="submit">+</button>
    </form>
  );
}