import { CustomJwtPayload } from "../utils/customJwtPayload"

declare global{
    namespace Express{
        interface Request{
            user?: CustomJwtPayload;
        }
    }
}