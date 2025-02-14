import { HttpException } from '../exceptions/httpException';
import jwt from 'jsonwebtoken';
var TOKEN_PASSWORD = process.env.TOKEN_PASSWORD || "pass";
export function isAuthenticate(req, res, next) {
    var tokenReceived = req.cookies.token;
    if (!tokenReceived) next(new HttpException(403, "Access Denied"));
    try {
        var tokenDecodificado = jwt.verify(tokenReceived, TOKEN_PASSWORD);
        req.user = tokenDecodificado;
        next();
    } catch (error) {
        next(error);
    }
}

//# sourceMappingURL=auth.middleware.js.map