import { LogResponse } from "@/model/log";
import { IResponse } from "@/model/response";
import { handleResponse } from "@/utils/handlesResponse";
import api from "./api";

export const getLogs = async (): Promise<IResponse<LogResponse[]>> => {
    try {
        const response = await handleResponse<LogResponse[]>(api.get('/logs'));
        return response;
    } catch (error) {
        console.error('Error fetching logs:', error);
        throw error;
    }
};