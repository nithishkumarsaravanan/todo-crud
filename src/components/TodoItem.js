import React, { useState } from "react";

function TodoItem({ todo, deleteTodo, startEditing, updateTodo }) {
  const [newText, setNewText] = useState(todo.text);

  const handleUpdate = () => {
    if (newText.trim()) {
      updateTodo(todo.id, newText);
    }
  };

  return (
    <li>
      {todo.isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <button onClick={() => startEditing(todo.id)}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
