export interface IResponse<T, E = any> {
    status: boolean;
    code: number;
    message?: string;
    data?: T;
    errors?: E;
}