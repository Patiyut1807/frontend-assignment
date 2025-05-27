export type TodoItemType = "Fruit" | "Vegetable" | string;

export type TodoItems = TodoItem[];

export interface TodoItem {
    type: string
    name: string,
}
