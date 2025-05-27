import { axiosInstance } from "@/configs/axios"
import { UserResponse } from "@/interfaces/user"


export const getUsers = async (): Promise<UserResponse> => {
    const res = (await axiosInstance.get<UserResponse>("/user")).data
    return res
} 