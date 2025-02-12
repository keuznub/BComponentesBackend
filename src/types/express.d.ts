import { CustomJwtPayload } from "../utils/CustomJwtPayload"

declare global{
    namespace Express{
        interface Request{
            user?: CustomJwtPayload;
        }
    }
}