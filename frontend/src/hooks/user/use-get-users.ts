import { getUsers } from "@/services/user"
import { useQuery } from "@tanstack/react-query"

export const useGetUser = () => {
    return useQuery(
        {
            queryKey: ["user"],
            queryFn: getUsers,

        }
    )
}