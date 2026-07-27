import { LoginRequest, LoginResponse } from "@/model/auth";
import { IResponse } from "@/model/response";
import api from "./api";

export const login = async (loginData: LoginRequest): Promise<IResponse<LoginResponse>> => {
    try {
        const response = await api.post('/auth/login', loginData);
        return response.data;
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
}