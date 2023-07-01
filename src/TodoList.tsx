// src/TodoList.tsx
import React from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";
import { AppState } from "./reducer";



interface TodoListProps {
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(TodoList);

export interface Todo {
    id: number;
    text: string;
    completed: boolean;
  }