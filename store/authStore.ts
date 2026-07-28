import { create } from 'zustand'
import { LoginResponse, LoginRequest } from "@/model/auth";
import { login } from "@/service/authService";
import { IResponse } from "@/model/response";

type State = {

}

type Actions = {
    login: (loginData: LoginRequest) => Promise<IResponse<LoginResponse>>;
}

export const useAuthStore = create<State & Actions>((set) => ({
    login: async (loginData: LoginRequest): Promise<IResponse<LoginResponse>> => {
        const res = await login(loginData);

        return res;
    },
}))