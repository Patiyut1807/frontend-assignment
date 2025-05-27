import React from "react";
import { TodoItems, TodoItemType } from "@/interfaces/todos/todo-item";
import TodoBtn from "@/components/Button/todo/TodoBtn";

interface TodoColumnProps {
  type: TodoItemType;
  data: TodoItems;
  handleClick: (typeKey: TodoItemType, name: string) => void;
}
const TodoColumn = ({ data, type, handleClick }: TodoColumnProps) => {
  return (
    <div className="flex flex-col h-full flex-1 border border-gray-200 ">
      <h1 className="w-full flex justify-center items-center font-semibold h-[35px] bg-gray-100 ">
        {type}
      </h1>
      <div className="mt-2 flex flex-col gap-2 px-2">
        {data.map((item, index) => (
          <TodoBtn
            key={index}
            handleClick={() => handleClick(type, item.name)}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoColumn;
