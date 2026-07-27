export interface ConcertResponse {
    id: number;
    name: string;
    detail: string;
    limit: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface CreateConcertRequest {
    name: string;
    detail: string;
    limit: number;
}

export interface UpdateConcertRequest {
    name?: string;
    detail?: string;
    limit?: number;
}