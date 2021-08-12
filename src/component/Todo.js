import React, { useState } from "react";
import { removeItem, editText, markCompelted } from "../actionCreator/ActionTodo";
import { useDispatch } from "react-redux";
const Todo = (props) => {
  let dispatch = useDispatch();
  const { item } = props;
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState("");

  const handleDoubleClick = () => {
    setEdit(true);
  };
  const handleRemove = async (id) => {
    const todoLocal = await localStorage.getItem("todos");
    if (todoLocal) {
      localStorage.setItem(
        "todos",
        JSON.stringify(JSON.parse(todoLocal).filter((item) => item.id !== id))
      );
    }

    dispatch(removeItem(id));

  };

  const handleEdit = (e) => {
    if (e.key === "Enter") {
      const newText = {
        ...item,
        title: text
      };
      dispatch(editText(newText));
      setEdit(false);
    }
  };
  const handleCompleted = (id) => {
    dispatch(markCompelted(id));
    // setIsCompleted(false)
  };
  return (
    <li
      className={`${edit ? "editing" : ""} ${item.isCompleted ? "completed" : ""}`}>
      <div className="view">
        {!edit ? (
          <div className="flex justify-between">
            <input
              checked={item.isCompleted}
              type="checkbox"
              className="toggle"
              onChange={() => handleCompleted(item.id)}
            />
            <label onDoubleClick={handleDoubleClick}>{item.title}</label>
            <button
              className="destroy"
              onClick={() => handleRemove(item.id)}
            ></button>
          </div>
        ) : (
          <input
            className="edit"
            defaultValue={item.title}
            onChange={(e) => setText(e.target.value)}
            onKeyPress={handleEdit}
          />
        )}
      </div>
    </li>
  );
};

export default Todo;
