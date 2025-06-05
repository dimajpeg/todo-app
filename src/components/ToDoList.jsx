import ToDoItem from "./ToDoItem";

export default function ToDoList({ tasks, toggleTask, deleteTask }) {
  return (
    <ul className="todo-list">
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