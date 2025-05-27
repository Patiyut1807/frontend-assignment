"use client";
import TodoColumn from "@/components/Column/todo/TodoColumn";
import MainList from "@/components/List/todo/MainList";
import {
  TodoItem,
  TodoItems,
  TodoItemType,
} from "@/interfaces/todos/todo-item";
import { useCallback, useReducer, useState } from "react";
const MockData = [
  {
    type: "Fruit",
    name: "Apple",
  },
  {
    type: "Vegetable",
    name: "Broccoli",
  },
  {
    type: "Vegetable",
    name: "Mushroom",
  },
  {
    type: "Fruit",
    name: "Banana",
  },
  {
    type: "Vegetable",
    name: "Tomato",
  },
  {
    type: "Fruit",
    name: "Orange",
  },
  {
    type: "Fruit",
    name: "Mango",
  },
  {
    type: "Fruit",
    name: "Pineapple",
  },
  {
    type: "Vegetable",
    name: "Cucumber",
  },
  {
    type: "Fruit",
    name: "Watermelon",
  },
  {
    type: "Vegetable",
    name: "Carrot",
  },
];
interface TodoState {
  pool: TodoItem[];
  categorized: Record<TodoItemType, TodoItem[]>;
}
type TodoAction =
  | { type: "MOVE_TO_CATEGORY"; index: number }
  | { type: "MOVE_TO_POOL"; typeKey: TodoItemType; name: string };

const initialState: TodoState = {
  pool: MockData,
  categorized: {},
};
function reducer(state: TodoState, action: TodoAction): TodoState {
  switch (action.type) {
    case "MOVE_TO_CATEGORY": {
      const item = state.pool[action.index];
      const newPool = state.pool.filter((_, i) => i !== action.index);

      const category = item.type;
      const existing = state.categorized[category] || [];

      return {
        pool: newPool,
        categorized: {
          ...state.categorized,
          [category]: [...existing, item],
        },
      };
    }

    case "MOVE_TO_POOL": {
      const { typeKey, name } = action;
      const list = state.categorized[typeKey] || [];

      const index = list.findIndex((i) => i.name === name);
      if (index === -1) return state;

      const item = list[index];
      const newList = list.filter((_, i) => i !== index);

      const newCategorized = {
        ...state.categorized,
        [typeKey]: newList,
      };
      if (newList.length === 0) delete newCategorized[typeKey];

      return {
        pool: [...state.pool, item],
        categorized: newCategorized,
      };
    }

    default:
      return state;
  }
}

export default function Home() {
  const TodoCategory = MockData.reduce<string[]>((acc, item) => {
    if (!acc.includes(item.type)) {
      acc.push(item.type);
    }
    return acc;
  }, []);
  const [TodoData, dispatch] = useReducer(reducer, initialState);

  const handleMoveToCategory = useCallback(
    (index: number) => {
      const item = TodoData.pool[index];
      dispatch({ type: "MOVE_TO_CATEGORY", index });

      setTimeout(() => {
        dispatch({
          type: "MOVE_TO_POOL",
          typeKey: item.type,
          name: item.name,
        });
      }, 5000);
    },
    [TodoData]
  );

  const handleMoveToPool = useCallback(
    (typeKey: TodoItemType, name: string) => {
      dispatch({ type: "MOVE_TO_POOL", typeKey, name });
    },
    []
  );

  return (
    <main id="home" className={`bg-white h-[100dvh] text-black flex  py-4 px-8  gap-4`}>
      <MainList handleClick={handleMoveToCategory} data={TodoData.pool} />
      {TodoCategory.map((type, index) => (
        <TodoColumn
          key={index}
          type={type}
          data={TodoData.categorized[type] || []}
          handleClick={handleMoveToPool}
        />
      ))}
    </main>
  );
}
