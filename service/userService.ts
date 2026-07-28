import api from './api';
import { UserResponse, CreateUserRequest, UpdateUserRequest } from '../model/user';
import { IResponse } from '../model/response';
import { handleResponse } from '@/utils/handlesResponse';

export const getUsers = async (): Promise<IResponse<UserResponse[]>> => {
    try {
        const response = await handleResponse<UserResponse[]>(api.get('/users'));
        return response;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};

export const getUserById = async (userId: number): Promise<IResponse<UserResponse>> => {
    try {
        const response = await handleResponse<UserResponse>(
            api.get(`/users/${userId}`)
        );
        return response;
    } catch (error) {
        console.error('Error fetching user by ID:', error);
        throw error;
    }
};

export const createUser = async (userData: CreateUserRequest): Promise<IResponse<UserResponse>> => {
    try {
        const response = await handleResponse<UserResponse>(
            api.post('/users', userData)
        );
        return response;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};

export const updateUser = async (userId: number, userData: Partial<UpdateUserRequest>): Promise<IResponse<UserResponse>> => {
    try {
        const response = await handleResponse<UserResponse>(
            api.put(`/users/${userId}`, userData)
        );
        return response;
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
};

export const deleteUser = async (userId: number): Promise<IResponse<{ message: string }>> => {
    try {
        const response = await handleResponse<{ message: string }>(
            api.delete(`/users/${userId}`)
        );
        return response;
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
};