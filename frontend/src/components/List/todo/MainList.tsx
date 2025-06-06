import TodoBtn from "@/components/Button/todo/TodoBtn";
import { TodoItems } from "@/interfaces/todo-item";
import React from "react";
interface Props {
  data: TodoItems;
  handleClick: (index: number) => void;
}
const MainList = ({ data, handleClick }: Props) => {
  return (
    <div className="flex flex-col gap-2 h-full flex-1 px-6 overflow-y-auto min-w-[200px]">
      {data.map((item, index) => (
        <TodoBtn
          key={index}
          handleClick={() => handleClick(index)}
          item={item}
        />
      ))}
    </div>
  );
};

export default MainList;
