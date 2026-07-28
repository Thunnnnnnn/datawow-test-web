export interface JWTDecodeResponse {
    sub: number;
    email: string;
    role: string;
    iat: number;
    exp: number;
}