// App.tsx
import React from "react";
import { Provider } from "react-redux";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import store from "./store";
import "./styles.css";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Todo List</h1>
        <TodoForm />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
