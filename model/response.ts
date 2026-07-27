export interface IResponse<T> {
    status: boolean;
    code: number;
    data: T;
    message?: string;
};