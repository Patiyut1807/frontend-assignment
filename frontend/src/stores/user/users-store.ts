import { create } from "zustand";
import { User } from "@/interfaces/user";

export interface TodoItem {
  type: string; 
  name: string;
}

export type DepartmentType = string;

export interface UserState {
  pool: TodoItem[];
  departmentMap: Record<DepartmentType, TodoItem[]>;

  setUsers: (users: User[]) => void;
  moveToDepartment: (index: number) => void;
  moveToPool: (typeKey: DepartmentType, name: string) => void;
  getDepartments: () => DepartmentType[];
}

export const useUserStore = create<UserState>((set, get) => ({
  pool: [],
  departmentMap: {},

  setUsers: (users) => {
    const todoItems = users.map((user) => ({
      type: user.company.department,
      name: `${user.firstName} ${user.lastName}`,
    }));
    set({ pool: todoItems, departmentMap: {} });
  },

  moveToDepartment: (index) => {
    const { pool, departmentMap } = get();
    const item = pool[index];
    const newPool = pool.filter((_, i) => i !== index);
    const updated = [...(departmentMap[item.type] || []), item];

    set({
      pool: newPool,
      departmentMap: {
        ...departmentMap,
        [item.type]: updated,
      },
    });

    setTimeout(() => {
      const state = get();
      const backIndex = state.departmentMap[item.type]?.findIndex(
        (i) => i.name === item.name
      );
      if (backIndex !== undefined && backIndex >= 0) {
        get().moveToPool(item.type, item.name);
      }
    }, 5000);
  },

  moveToPool: (typeKey, name) => {
    const { pool, departmentMap } = get();
    const list = departmentMap[typeKey] || [];
    const index = list.findIndex((i) => i.name === name);
    if (index === -1) return;

    const item = list[index];
    const newList = list.filter((_, i) => i !== index);
    const newDepartmentMap = { ...departmentMap, [typeKey]: newList };
    if (newList.length === 0) delete newDepartmentMap[typeKey];

    set({
      pool: [...pool, item],
      departmentMap: newDepartmentMap,
    });
  },

  getDepartments: () => {
    const types = new Set<string>();
    get().pool.forEach((item) => types.add(item.type));
    Object.keys(get().departmentMap).forEach((type) => types.add(type));
    return Array.from(types);
  },
}));
