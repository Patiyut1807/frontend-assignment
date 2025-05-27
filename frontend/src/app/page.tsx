"use client";
import TodoColumn from "@/components/Column/todo/TodoColumn";
import MainList from "@/components/List/todo/MainList";
import { useGetUser } from "@/hooks/user";

import { useUserStore } from "@/stores/user/users-store";
import { handleHorizontalWheelScroll } from "@/utils/scroll";
import { useEffect } from "react";

export default function Home() {
  const { data: usersData } = useGetUser();
  const {
    pool,
    departmentMap,
    setUsers,
    moveToDepartment,
    moveToPool,
    getDepartments,
  } = useUserStore();
  useEffect(() => {
    setUsers(usersData?.users || []);
  }, [usersData]);

  return (
    <main
      id="home"
      className={`bg-white h-[100dvh] text-black flex  py-4 px-8  gap-4`}
    >
      <MainList handleClick={moveToDepartment} data={pool} />
      <div
        onWheel={handleHorizontalWheelScroll}
        className="flex flex-3 gap-4 h-full overflow-y-auto"
      >
        {getDepartments().map((type, index) => (
          <TodoColumn
            key={index}
            type={type}
            data={departmentMap[type] || []}
            handleClick={moveToPool}
          />
        ))}
      </div>
    </main>
  );
}
