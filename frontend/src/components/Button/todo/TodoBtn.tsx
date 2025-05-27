import { TodoItem } from "@/interfaces/todos/todo-item";
import React from "react";
interface TodoBtnProps {
  item: TodoItem;
  handleClick: () => void;
}
const TodoBtn = ({item,handleClick}:TodoBtnProps) => {
  return (
    <button
      className="p-2 border border-gray-200 hover:bg-gray-100 shadow-sm "
      onClick={() => handleClick()}
    >
      {item.name}
    </button>
  );
};

export default TodoBtn;
