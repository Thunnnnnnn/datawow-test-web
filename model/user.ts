export interface UserResponse {
    id: number;
    name: string;
    email: string;
    role: 'USER' | 'ADMIN';
    createdAt: Date;
    updatedAt: Date;
}

export interface CreateUserRequest {
    name: string;
    email: string;
    password: string;
    role: 'USER' | 'ADMIN';
}

export interface UpdateUserRequest {
    name?: string;
    email?: string;
    password?: string;
    role?: 'USER' | 'ADMIN';
}