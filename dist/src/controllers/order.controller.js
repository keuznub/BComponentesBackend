"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "OrderController", {
    enumerable: true,
    get: function() {
        return OrderController;
    }
});
const _orderservice = require("../services/order.service");
const _httpException = require("../exceptions/httpException");
let OrderController = class OrderController {
    static async getAll(req, res, next) {
        try {
            const products = await _orderservice.OrderService.getAll();
            res.status(201).json(products);
        } catch (error) {
            next(error);
        }
    }
    static async getById(req, res, next) {
        try {
            const id = Number.parseInt(req.params.id);
            if (isNaN(id)) throw new _httpException.HttpException(400, "Bad request");
            const rate = await _orderservice.OrderService.getById(id);
            res.status(201).json(rate);
        } catch (error) {
            next(error);
        }
    }
    static async save(req, res, next) {
        try {
            const orderProduct = req.body;
            if (!req.user) return;
            const idUser = req.user.id;
            const result = await _orderservice.OrderService.save(orderProduct, idUser);
            res.status(201).json(result);
        } catch (error) {
            next(error);
        }
    }
    static async delete(req, res, next) {
        try {
            const id = Number.parseInt(req.params.id);
            if (isNaN(id)) throw new _httpException.HttpException(400, "Bad request");
            const result = await _orderservice.OrderService.delete(id);
            res.status(201).json(result);
        } catch (error) {
            next(error);
        }
    }
    static async update(req, res, next) {
        try {
            const id = Number.parseInt(req.params.id);
            if (isNaN(id)) throw new _httpException.HttpException(400, "Bad request");
            const order = req.body;
            order.id = id;
            const result = await _orderservice.OrderService.update(order);
            res.status(201).json(result);
        } catch (error) {
            next(error);
        }
    }
};

//# sourceMappingURL=order.controller.js.map