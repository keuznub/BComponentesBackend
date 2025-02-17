"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return AuthController;
    }
});
const _authservice = require("../services/auth.service");
const _jsonwebtoken = /*#__PURE__*/ _interop_require_default(require("jsonwebtoken"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let AuthController = class AuthController {
    static async register(req, res, next) {
        try {
            const userData = req.body;
            const newUser = await _authservice.AuthService.register(userData);
            res.status(201).json({
                message: "User register succesfully",
                user: newUser
            });
        } catch (error) {
            next(error);
        }
    }
    static async login(req, res, next) {
        try {
            const userData = req.body;
            const token = await _authservice.AuthService.login(userData);
            res.cookie('token', token, {
                maxAge: 60 * 60 * 1000,
                httpOnly: true,
                secure: false,
                sameSite: "strict"
            });
            const { id, role } = _jsonwebtoken.default.decode(token);
            res.status(201).json({
                message: "Login sucessfully",
                id,
                role
            });
        } catch (error) {
            next(error);
        }
    }
    static async logout(req, res, next) {
        try {
            res.clearCookie('token', {
                httpOnly: true,
                secure: false,
                sameSite: "strict"
            });
            res.status(201).json({
                message: "Logout sucessfully"
            });
        } catch (error) {
            next(error);
        }
    }
};

//# sourceMappingURL=auth.controller.js.map