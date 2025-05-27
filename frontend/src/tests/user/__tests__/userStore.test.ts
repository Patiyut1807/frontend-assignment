import { act } from "react";
import { useUserStore } from "@/stores/user/users-store";
import { User } from "@/interfaces/user";

const mockUsers: User[] = [
    {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        company: { department: "Engineering" },
    } as User,
    {
        id: 2,
        firstName: "Jane",
        lastName: "Smith",
        company: { department: "Marketing" },
    } as User,
];

describe("userStore", () => {
    beforeEach(() => {
        useUserStore.setState({ pool: [], departmentMap: {} });
    });

    it("should set users correctly", () => {
        useUserStore.getState().setUsers(mockUsers);

        const { pool, departmentMap } = useUserStore.getState();

        expect(pool.length).toBe(2);
        expect(pool[0].name).toBe("John Doe");
        expect(pool[1].type).toBe("Marketing");
        expect(Object.keys(departmentMap).length).toBe(0);
    });

    it("should move user to department", () => {
        useUserStore.getState().setUsers(mockUsers);
        act(() => {
            useUserStore.getState().moveToDepartment(0);
        });

        const { pool, departmentMap } = useUserStore.getState();
        expect(pool.length).toBe(1);
        expect(pool[0].name).toBe("Jane Smith");

        expect(departmentMap["Engineering"]).toHaveLength(1);
        expect(departmentMap["Engineering"]?.[0].name).toBe("John Doe");
    });

    it("should move user back to pool", () => {
        useUserStore.getState().setUsers(mockUsers);
        act(() => {
            useUserStore.getState().moveToDepartment(0);
            useUserStore.getState().moveToPool("Engineering", "John Doe");
        });

        const { pool, departmentMap } = useUserStore.getState();
        expect(pool.length).toBe(2);
        expect(departmentMap["Engineering"]).toBeUndefined();
    });

    it("should return all departments", () => {
        useUserStore.getState().setUsers(mockUsers);
        act(() => {
            useUserStore.getState().moveToDepartment(0);
        });

        const departments = useUserStore.getState().getDepartments();
        expect(departments).toContain("Engineering");
        expect(departments).toContain("Marketing");
    });
});
