import { getUsers } from "@/services/user"
import { useUserStore } from "@/stores/user/users-store"
import { QueriesOptions, QueryOptions, useQuery } from "@tanstack/react-query"

export const useGetUser = () => {
    const setUser = useUserStore((state => state.setUsers))
    return useQuery(
        {
            queryKey: ["user"],
            queryFn: getUsers,
            
        }
    )
}