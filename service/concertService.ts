import { ConcertCountResponse, ConcertResponse, CreateConcertRequest, UpdateConcertRequest } from "@/model/concert";
import { IResponse } from "@/model/response";
import api from "./api";
import { handleResponse } from "@/utils/handlesResponse";

export const getConcerts = async (): Promise<IResponse<ConcertResponse[]>> => {
    try {
        const response = await handleResponse<ConcertResponse[]>(api.get('/concerts'));
        return response;
    } catch (error) {
        console.error('Error fetching concerts:', error);
        throw error;
    }
};

export const getConcertById = async (concertId: number): Promise<IResponse<ConcertResponse | null>> => {
    try {
        const response = await handleResponse<ConcertResponse>(api.get(`/concerts/${concertId}`));
        return response;
    } catch (error) {
        console.error('Error fetching concert by ID:', error);
        throw error;
    }
};

export const createConcert = async (concertData: CreateConcertRequest): Promise<IResponse<ConcertResponse>> => {
    try {
        const response = await handleResponse<ConcertResponse>(api.post('/concerts', concertData));
        return response;
    } catch (error) {
        console.error('Error creating concert:', error);
        throw error;
    }
};

export const updateConcert = async (concertId: number, concertData: Partial<UpdateConcertRequest>): Promise<IResponse<ConcertResponse>> => {
    try {
        const response = await handleResponse<ConcertResponse>(api.put(`/concerts/${concertId}`, concertData));
        return response;
    } catch (error) {
        console.error('Error updating concert:', error);
        throw error;
    }
};

export const deleteConcert = async (concertId: number): Promise<IResponse<{ message: string }>> => {
    try {
        const response = await handleResponse<{ message: string }>(api.delete(`/concerts/${concertId}`));
        return response;
    } catch (error) {
        console.error('Error deleting concert:', error);
        throw error;
    }
};

export const getConcertCount = async (): Promise<IResponse<ConcertCountResponse>> => {
    try {
        const response = await handleResponse<ConcertCountResponse>(api.get('/concerts/count'));
        return response;
    } catch (error) {
        console.error('Error fetching concert count:', error);
        throw error;
    }
};