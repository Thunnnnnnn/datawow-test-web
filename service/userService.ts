import api from './api';
import { UserResponse, CreateUserRequest, UpdateUserRequest } from '../model/user';
import { IResponse } from '../model/response';

export const getUsers = async (): Promise<IResponse<UserResponse[]>> => {
    try {
        const response = await api.get('/users');
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

export const getUserById = async (userId: number): Promise<IResponse<UserResponse>> => {
    try {
        const response = await api.get(`/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user by ID:', error);
        throw error;
    }
};

export const createUser = async (userData: CreateUserRequest): Promise<IResponse<UserResponse>> => {
    try {
        const response = await api.post('/users', userData);
        return response.data;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};

export const updateUser = async (userId: number, userData: Partial<UpdateUserRequest>): Promise<IResponse<UserResponse>> => {
    try {
        const response = await api.put(`/users/${userId}`, userData);
        return response.data;
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
};

export const deleteUser = async (userId: number): Promise<IResponse<{ message: string }>> => {
    try {
        const response = await api.delete(`/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
};