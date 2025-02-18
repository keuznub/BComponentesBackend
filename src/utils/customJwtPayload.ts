import { JwtPayload } from "jsonwebtoken";

export interface CustomJwtPayload extends JwtPayload{
    username?: string,
    email?: string,
    id: number,
    role?: string
}

