import { LoginRequest, LoginResponse } from "@/model/auth";
import { IResponse } from "@/model/response";
import api from "./api";
import { handleResponse } from "@/utils/handlesResponse";

export const login = async (loginData: LoginRequest): Promise<IResponse<LoginResponse>> => {
    try {
        const res = await handleResponse<LoginResponse>(
            api.post("/auth/login", loginData)
        );
        return res;
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
}