import { AxiosError, AxiosResponse } from "axios";
import { IResponse } from "@/model/response";

export async function handleResponse<T, E = any>(
    promise: Promise<AxiosResponse<IResponse<T>>>
): Promise<IResponse<T, E>> {
    try {
        const response = await promise;

        return {
            status: response.data.status,
            code: response.data.code,
            data: response.data.data,
            message: response.data.message,
        };
    } catch (err) {
        const error = err as AxiosError<IResponse<T, E>>;

        return {
            status: false,
            code: error.response?.status ?? 500,
            message: error.response?.data.message ?? "Internal Server Error",
            errors: error.response?.data.errors ?? ({} as E),
        };
    }
}