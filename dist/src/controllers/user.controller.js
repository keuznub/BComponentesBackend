"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UserController", {
    enumerable: true,
    get: function() {
        return UserController;
    }
});
const _httpException = require("../exceptions/httpException");
const _userservice = require("../services/user.service");
let UserController = class UserController {
    static async getAll(req, res, next) {
        try {
            const users = await _userservice.UserService.getAll();
            res.status(201).json(users);
        } catch (error) {
            next(error);
        }
    }
    static async getByID(req, res, next) {
        try {
            const id = Number.parseInt(req.params.id);
            if (isNaN(id)) throw new _httpException.HttpException(400, "Bad request");
            const user = await _userservice.UserService.getById(id);
            res.status(201).json(user);
        } catch (error) {
            next(error);
        }
    }
    static async delete(req, res, next) {
        try {
            const id = Number.parseInt(req.params.id);
            if (isNaN(id)) throw new _httpException.HttpException(400, "Bad request");
            const result = await _userservice.UserService.delete(id);
            res.status(201).json(result);
        } catch (error) {
            next(error);
        }
    }
    static async update(req, res, next) {
        try {
            const id = Number.parseInt(req.params.id);
            if (isNaN(id)) throw new _httpException.HttpException(400, "Bad request");
            const user = req.body;
            user.id = id;
            const result = await _userservice.UserService.update(user);
            res.status(201).json(result);
        } catch (error) {
            next(error);
        }
    }
};

//# sourceMappingURL=user.controller.js.map