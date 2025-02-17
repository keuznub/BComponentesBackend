"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isAuthenticate", {
    enumerable: true,
    get: function() {
        return isAuthenticate;
    }
});
const _httpException = require("../exceptions/httpException");
const _jsonwebtoken = /*#__PURE__*/ _interop_require_default(require("jsonwebtoken"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const TOKEN_PASSWORD = process.env.TOKEN_PASSWORD || "pass";
function isAuthenticate(req, res, next) {
    const tokenReceived = req.cookies.token;
    if (!tokenReceived) next(new _httpException.HttpException(403, "Access Denied"));
    try {
        const tokenDecodificado = _jsonwebtoken.default.verify(tokenReceived, TOKEN_PASSWORD);
        req.user = tokenDecodificado;
        next();
    } catch (error) {
        next(error);
    }
}

//# sourceMappingURL=auth.middleware.js.map