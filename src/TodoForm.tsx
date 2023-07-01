// TodoForm.tsx
import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "./actions";

interface TodoFormProps {
  onAdd: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo..."
      />
      <button type="submit">Add</button>
    </form>
  );
};

const mapDispatchToProps = {
  onAdd: addTodo,
};

export default connect(null, mapDispatchToProps)(TodoForm);
