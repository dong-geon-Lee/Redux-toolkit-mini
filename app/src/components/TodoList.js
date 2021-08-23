import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodosAsync } from "../redux/todoSlice";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);

  console.log(todos);

  return (
    <ul className="list-group">
      {todos.map((todo, index) => (
        <TodoItem
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          key={index}
        />
      ))}
    </ul>
  );
};

export default TodoList;
