import { UserResponse } from "./user";
import { ConcertResponse } from "./concert";

export interface BookHistoryResponse {
    id: number;
    userId: number;
    user: UserResponse;
    concertId: number;
    concert: ConcertResponse;
    status: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface CreateBookHistoryRequest {
    userId: number;
    concertId: number;
}

export interface UpdateBookHistoryRequest {
    userId?: number;
    concertId?: number;
    status?: string;
}