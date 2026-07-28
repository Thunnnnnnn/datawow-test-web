import { ConcertResponse } from "./concert";
import { UserResponse } from "./user";

export interface LogResponse {
    id: number;
    action: string;
    userId: number;
    user: UserResponse;
    concertId: number;
    concert: ConcertResponse;
    createdAt: Date;
}