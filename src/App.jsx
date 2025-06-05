// src/App.jsx
import { useState } from "react";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";
import './index.css'; // Убедись, что стили импортированы (или в main.jsx)

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // --- НОВЫЙ КОД ДЛЯ ПОДСЧЕТА ---
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  // Можно было бы и функцию сделать, как указано в задании, но для простоты
  // можно и так. Если нужна именно функция:
  // const countCompletedTasks = () => {
  //   return tasks.filter(task => task.completed).length;
  // };
  // const completedTasks = countCompletedTasks();
  // --- КОНЕЦ НОВОГО КОДА ДЛЯ ПОДСЧЕТА ---

  return (
    <div className="app">
      <h1>To-Do List</h1>
      {/* --- НОВЫЙ КОД ДЛЯ ОТОБРАЖЕНИЯ СЧЕТЧИКА --- */}
      <div className="task-counter"> {/* Добавим класс для возможной стилизации */}
        <h2>Загальна кількість завдань: {totalTasks}</h2>
        <h2>Виконано завдань: {completedTasks}</h2>
      </div>
      {/* --- КОНЕЦ НОВОГО КОДА ДЛЯ ОТОБРАЖЕНИЯ СЧЕТЧИКА --- */}
      <ToDoForm addTask={addTask} />
      <ToDoList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );
}