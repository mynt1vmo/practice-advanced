import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoItem, setList, clearCompleted } from "../actionCreator/ActionTodo";
import Todo from "./Todo";

const Todolist = () => {
  const dispatch = useDispatch();
  const todolist = useSelector((state) => state);
  const [value, setValue] = useState("");
  const [optionFilter, setOptionFilter] = useState('All');

  useEffect(() => {
    const getTodoList = async () => {
      const todoLocal = await localStorage.getItem("todos");
      if (todoLocal) {
        const listLocal = JSON.parse(todoLocal);
        dispatch(setList(listLocal));
      }
    };
    getTodoList();
  }, []);

  const handleClick = (e) => {
    if (e.key === "Enter" && Text) {
      const newItem = {
        id: new Date().valueOf(),
        title: value,
        isCompleted: false,

      };
      dispatch(addTodoItem(newItem));
      localStorage.setItem(
        "todos",
        JSON.stringify([...todolist.todo.todos, newItem])
      );
      setValue("");
    }
  };

  const onHandleClick = (option) => {
    setOptionFilter(option)
  }
  const onHandleClear = (action) => {
    dispatch(clearCompleted(action))
  }
  return (
    <div>
      <section className="todoapp">
        <header className="header">
          <h1 className="title">Todos</h1>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="What needs to be done?"
            className="new-todo"
            onKeyPress={handleClick}
          />
        </header>
        <section className="main">
          <ul className="todo-list ">
            {todolist.todo.todos.map((item, index) => {
              if (optionFilter === 'Completed') {
                if (item.isCompleted) {
                  return <Todo item={item} key={index} />;
                }
              } else if (optionFilter === 'Active') {
                if (!item.isCompleted) {
                  return <Todo item={item} key={index} />;
                }
              } else {
                return <Todo item={item} key={index} />;
              }
            })}
          </ul>
        </section>
        <footer className="footer">
          <ul className="filters flex justify-between">
            <li><a onClick={() => onHandleClick('All')} className={optionFilter === 'All' ? 'selected' : ''}>All</a></li>
            <li><a onClick={() => onHandleClick('Active')} className={optionFilter === 'Active' ? 'selected' : ''}>Active</a></li>
            <li><a onClick={() => onHandleClick('Completed')} className={optionFilter === 'Completed' ? 'selected' : ''}>Completed</a></li>
            <button className="clear-completed" onClick={() => onHandleClear('Clear')} >Clear completed</button>
          </ul></footer>
      </section>
    </div>

  );
};

export default Todolist;
