"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CategoryController", {
    enumerable: true,
    get: function() {
        return CategoryController;
    }
});
const _categoryservice = require("../services/category.service");
const _httpException = require("../exceptions/httpException");
let CategoryController = class CategoryController {
    static async getAll(req, res, next) {
        try {
            const categories = await _categoryservice.CategoryService.getAll();
            res.status(201).json(categories);
        } catch (error) {
            next(error);
        }
    }
    static async getByID(req, res, next) {
        try {
            const id = Number.parseInt(req.params.id);
            if (isNaN(id)) throw new _httpException.HttpException(400, "Bad request");
            const category = await _categoryservice.CategoryService.getById(id);
            res.status(201).json(category);
        } catch (error) {
            next(error);
        }
    }
    static async save(req, res, next) {
        try {
            const category = req.body;
            const result = await _categoryservice.CategoryService.save(category);
            res.status(201).json(result);
        } catch (error) {
            next(error);
        }
    }
    static async delete(req, res, next) {
        try {
            const id = Number.parseInt(req.params.id);
            if (isNaN(id)) throw new _httpException.HttpException(400, "Bad request");
            const result = await _categoryservice.CategoryService.delete(id);
            res.status(201).json(result);
        } catch (error) {
            next(error);
        }
    }
    static async update(req, res, next) {
        try {
            const id = Number.parseInt(req.params.id);
            if (isNaN(id)) throw new _httpException.HttpException(400, "Bad request");
            const product = req.body;
            product.id = id;
            const result = await _categoryservice.CategoryService.update(product);
            res.status(201).json(result);
        } catch (error) {
            next(error);
        }
    }
};

//# sourceMappingURL=category.controller.js.map