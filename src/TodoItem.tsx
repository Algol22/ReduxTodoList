// TodoItem.tsx
import React from "react";
import { connect } from "react-redux";
import { Todo } from "./TodoList";
import { toggleTodo, deleteTodo } from "./actions";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <div>
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        onClick={() => onToggle(todo.id)}
      >
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};

const mapDispatchToProps = {
  onToggle: toggleTodo,
  onDelete: deleteTodo,
};

export default connect(null, mapDispatchToProps)(TodoItem);
