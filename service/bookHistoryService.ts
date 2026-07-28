import { IResponse } from "@/model/response";
import api from "./api";
import { BookHistoryResponse } from "@/model/bookHistory";

export const getBookHistories = async (): Promise<IResponse<BookHistoryResponse[]>> => {
    try {
        const response = await api.get('/book-histories');
        return response.data;
    } catch (error) {
        console.error('Error fetching book histories:', error);
        throw error;
    }
};

export const getBookHistoryById = async (bookHistoryId: number): Promise<IResponse<BookHistoryResponse | null>> => {
    try {
        const response = await api.get(`/book-histories/${bookHistoryId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching book history by ID:', error);
        throw error;
    }
};

export const getBookHistoriesByUser = async (): Promise<IResponse<BookHistoryResponse[]>> => {
    try {
        const response = await api.get(`/book-histories/user`);
        return response.data;
    } catch (error) {
        console.error('Error fetching book histories by user ID:', error);
        throw error;
    }
};

export const createBookHistory = async ({ concertId }: { concertId: number }): Promise<IResponse<BookHistoryResponse>> => {
    try {
        const response = await api.post('/book-histories', { concertId });
        return response.data;
    } catch (error) {
        console.error('Error creating book history:', error);
        throw error;
    }
};

export const updateBookHistory = async (bookHistoryId: number, bookHistoryData: Partial<BookHistoryResponse>): Promise<IResponse<BookHistoryResponse>> => {
    try {
        const response = await api.put(`/book-histories/${bookHistoryId}`, bookHistoryData);
        return response.data;
    } catch (error) {
        console.error('Error updating book history:', error);
        throw error;
    }
};

export const deleteBookHistory = async (bookHistoryId: number): Promise<IResponse<{ message: string }>> => {
    try {
        const response = await api.delete(`/book-histories/${bookHistoryId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting book history:', error);
        throw error;
    }
};
