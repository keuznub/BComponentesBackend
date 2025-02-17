"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ProductController", {
    enumerable: true,
    get: function() {
        return ProductController;
    }
});
const _productservice = require("../services/product.service");
const _httpException = require("../exceptions/httpException");
let ProductController = class ProductController {
    static async getAll(req, res, next) {
        try {
            const products = await _productservice.ProductService.getAll();
            res.status(201).json(products);
        } catch (error) {
            next(error);
        }
    }
    static async getByID(req, res, next) {
        try {
            const id = Number.parseInt(req.params.id);
            if (isNaN(id)) throw new _httpException.HttpException(400, "Bad request");
            const product = await _productservice.ProductService.getById(id);
            res.status(201).json(product);
        } catch (error) {
            next(error);
        }
    }
    static async save(req, res, next) {
        try {
            const product = req.body.product;
            const categories = req.body.categories;
            const result = await _productservice.ProductService.save(product, categories);
            res.status(201).json(result);
        } catch (error) {
            next(error);
        }
    }
    static async delete(req, res, next) {
        try {
            const id = Number.parseInt(req.params.id);
            if (isNaN(id)) throw new _httpException.HttpException(400, "Bad request");
            const result = await _productservice.ProductService.delete(id);
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
            const result = await _productservice.ProductService.update(product);
            res.status(201).json(result);
        } catch (error) {
            next(error);
        }
    }
};

//# sourceMappingURL=product.controller.js.map