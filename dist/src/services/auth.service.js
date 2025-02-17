"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AuthService", {
    enumerable: true,
    get: function() {
        return AuthService;
    }
});
const _httpException = require("../exceptions/httpException");
const _bcrypt = /*#__PURE__*/ _interop_require_default(require("bcrypt"));
const _jsonwebtoken = /*#__PURE__*/ _interop_require_default(require("jsonwebtoken"));
const _adapter = require("../database/adapter");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const TOKEN_PASSWORD = process.env.TOKEN_PASSWORD || "pass";
let AuthService = class AuthService {
    static async register(user) {
        const { email, username } = user;
        const findUserEmail = await _adapter.prisma.user.findUnique({
            where: {
                email
            }
        });
        if (findUserEmail) throw new _httpException.HttpException(409, `Email ${user.email} already exists`);
        const findUser = await _adapter.prisma.user.findUnique({
            where: {
                username
            }
        });
        if (findUser) throw new _httpException.HttpException(409, `Username ${user.username} already exists`);
        const encryptedPassword = await _bcrypt.default.hash(user.password, 10);
        user.password = '';
        return _adapter.prisma.user.create({
            data: {
                ...user,
                password: encryptedPassword,
                role: null
            },
            omit: {
                password: true
            }
        });
    }
    static async login(user) {
        const { username, email, password } = user;
        const findUser = email ? await _adapter.prisma.user.findUnique({
            where: {
                email
            }
        }) : await _adapter.prisma.user.findUnique({
            where: {
                username
            }
        });
        if (!findUser) throw new _httpException.HttpException(404, "User not found");
        const rightPasword = await _bcrypt.default.compare(password, findUser.password);
        if (!rightPasword) throw new _httpException.HttpException(401, "Incorrect Password");
        return _jsonwebtoken.default.sign({
            id: findUser.id,
            role: findUser.role
        }, TOKEN_PASSWORD, {
            expiresIn: "1h"
        });
    }
};

//# sourceMappingURL=auth.service.js.map