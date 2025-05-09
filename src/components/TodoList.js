import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo, startEditing, updateTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          startEditing={startEditing}
          updateTodo={updateTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
