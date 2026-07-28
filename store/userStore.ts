import { create } from 'zustand'
import { UserResponse, CreateUserRequest, UpdateUserRequest } from "@/model/user";
import { IResponse } from "@/model/response";
import { getUsers, getUserById, createUser, updateUser, deleteUser } from "@/service/userService";

type State = {
    users: UserResponse[];
    user: UserResponse | null;
}

type Actions = {
    getUsers: () => Promise<void>;
    getUserById: (userId: number) => Promise<void>;
    createUser: (userData: CreateUserRequest) => Promise<IResponse<UserResponse>>;
    updateUser: (userId: number, userData: Partial<UpdateUserRequest>) => Promise<IResponse<UserResponse>>;
    deleteUser: (userId: number) => Promise<IResponse<{ message: string }>>;
}

export const useUserStore = create<State & Actions>((set) => ({
    users: [],
    user: null,
    getUsers: async () => {
        const res = await getUsers();

        if (res.status) {
            set({ users: res.data });
        }
    },
    getUserById: async (userId: number) => {
        const res = await getUserById(userId);
        if (res.status) {
            set({ user: res.data });
        }
    },
    createUser: async (userData: CreateUserRequest) => {
        return createUser(userData);
    },
    updateUser: async (userId: number, userData: UpdateUserRequest) => {
        return updateUser(userId, userData);
    },
    deleteUser: async (userId: number) => {
        return deleteUser(userId);
    },
}))