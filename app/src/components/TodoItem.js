import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodoAsync, toggleCompleteAsync } from "../redux/todoSlice";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleCompletedClick = () => {
    dispatch(toggleCompleteAsync({ id: id, completed: !completed }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodoAsync({ id: id }));
  };

  return (
    <li className="list-group-item">
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input
            type="checkbox"
            className="mr-3"
            checked={completed}
            onChange={handleCompletedClick}
          ></input>
          {title}
        </span>
        <button onClick={handleDeleteClick} className="btn btn-danger">
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
