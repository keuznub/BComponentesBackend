"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UserService", {
    enumerable: true,
    get: function() {
        return UserService;
    }
});
const _httpException = require("../exceptions/httpException");
const _adapter = require("../database/adapter");
let UserService = class UserService {
    static async getAll() {
        const findUsers = await _adapter.prisma.user.findMany();
        if (!findUsers) throw new _httpException.HttpException(404, "Users not found");
        return findUsers;
    }
    static async getById(id) {
        const findUser = await _adapter.prisma.user.findUnique({
            where: {
                id
            }
        });
        if (!findUser) throw new _httpException.HttpException(404, "User not found");
        return findUser;
    }
    static async delete(id) {
        const findUser = await _adapter.prisma.user.findUnique({
            where: {
                id
            }
        });
        if (!findUser) throw new _httpException.HttpException(404, "User not found");
        return await _adapter.prisma.user.delete({
            where: {
                id
            }
        });
    }
    static async update(user) {
        const { id } = user;
        const findUser = await _adapter.prisma.user.findUnique({
            where: {
                id
            }
        });
        if (!findUser) throw new _httpException.HttpException(404, "User not found");
        return await _adapter.prisma.user.update({
            where: {
                id
            },
            data: {
                ...user
            }
        });
    }
};

//# sourceMappingURL=user.service.js.map