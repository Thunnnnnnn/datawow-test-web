import { ConcertResponse, CreateConcertRequest, UpdateConcertRequest } from "@/model/concert";
import { IResponse } from "@/model/response";
import api from "./api";

export const getConcerts = async (): Promise<IResponse<ConcertResponse[]>> => {
    try {
        const response = await api.get('/concerts');
        return response.data;
    } catch (error) {
        console.error('Error fetching concerts:', error);
        throw error;
    }
};

export const getConcertById = async (concertId: number): Promise<IResponse<ConcertResponse | null>> => {
    try {
        const response = await api.get(`/concerts/${concertId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching concert by ID:', error);
        throw error;
    }
};

export const createConcert = async (concertData: CreateConcertRequest): Promise<IResponse<ConcertResponse>> => {
    try {
        const response = await api.post('/concerts', concertData);
        return response.data;
    } catch (error) {
        console.error('Error creating concert:', error);
        throw error;
    }
};

export const updateConcert = async (concertId: number, concertData: Partial<UpdateConcertRequest>): Promise<IResponse<ConcertResponse>> => {
    try {
        const response = await api.put(`/concerts/${concertId}`, concertData);
        return response.data;
    } catch (error) {
        console.error('Error updating concert:', error);
        throw error;
    }
};

export const deleteConcert = async (concertId: number): Promise<IResponse<{ message: string }>> => {
    try {
        const response = await api.delete(`/concerts/${concertId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting concert:', error);
        throw error;
    }
};