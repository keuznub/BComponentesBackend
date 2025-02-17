"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RateController", {
    enumerable: true,
    get: function() {
        return RateController;
    }
});
const _rateservice = require("../services/rate.service");
let RateController = class RateController {
    static async getAll(req, res, next) {
        try {
            const products = await _rateservice.RateService.getAll();
            res.status(201).json(products);
        } catch (error) {
            next(error);
        }
    }
    static async getByProductId(req, res, next) {
        try {
            const id = req.body;
            const rate = await _rateservice.RateService.getByProductId(id);
            res.status(201).json(rate);
        } catch (error) {
            next(error);
        }
    }
    static async getAvgByProductId(req, res, next) {
        try {
            const id = req.body;
            const rate = await _rateservice.RateService.getAvgByProductId(id);
            res.status(201).json(rate);
        } catch (error) {
            next(error);
        }
    }
    static async getByUserId(req, res, next) {
        try {
            if (!req.user) return;
            const id = req.user.id;
            const rate = await _rateservice.RateService.getByUserId(id);
            res.status(201).json(rate);
        } catch (error) {
            next(error);
        }
    }
    static async getByIds(req, res, next) {
        try {
            if (!req.user) return;
            const idProduct = req.body;
            const idUser = req.user.id;
            const rate = await _rateservice.RateService.getByIds(idUser, idProduct);
            res.status(201).json(rate);
        } catch (error) {
            next(error);
        }
    }
    static async save(req, res, next) {
        try {
            const rate = req.body;
            if (!req.user) return;
            rate.idUser = req.user.id;
            const result = await _rateservice.RateService.save(rate);
            res.status(201).json(result);
        } catch (error) {
            next(error);
        }
    }
    static async delete(req, res, next) {
        try {
            const idProduct = req.body;
            if (!req.user) return;
            const idUser = req.user.id;
            const result = await _rateservice.RateService.delete(idUser, idProduct);
            res.status(201).json(result);
        } catch (error) {
            next(error);
        }
    }
};

//# sourceMappingURL=rate.controller.js.map