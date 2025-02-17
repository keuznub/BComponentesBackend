"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isAdmin", {
    enumerable: true,
    get: function() {
        return isAdmin;
    }
});
const _httpException = require("../exceptions/httpException");
function isAdmin(req, res, next) {
    try {
        if (!req.user) return;
        const role = req.user.role;
        console.log(role);
        if (role != "admin") next(new _httpException.HttpException(403, "Not permission"));
        next();
    } catch (error) {
        next(error);
    }
}

//# sourceMappingURL=isAdmin.middleware.js.map