// src/components/ToDoList.jsx
import ToDoItem from "./ToDoItem";

export default function ToDoList({ tasks, toggleTask, deleteTask }) {
  return (
    <ul className="todo-list">
      {tasks.length === 0 && <p>No tasks yet. Add some!</p>} {/* Сообщение, если задач нет */}
      {tasks.map((task) => (
        <ToDoItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}