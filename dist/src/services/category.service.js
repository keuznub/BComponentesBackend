"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CategoryService", {
    enumerable: true,
    get: function() {
        return CategoryService;
    }
});
const _httpException = require("../exceptions/httpException");
const _adapter = require("../database/adapter");
let CategoryService = class CategoryService {
    static async getAll() {
        const findCategory = await _adapter.prisma.category.findMany();
        if (!findCategory) throw new _httpException.HttpException(404, "Category not found");
        return findCategory;
    }
    static async getById(id) {
        const findCategory = await _adapter.prisma.category.findUnique({
            where: {
                id
            }
        });
        if (!findCategory) throw new _httpException.HttpException(404, "Category not found");
        return findCategory;
    }
    static async save(category) {
        return await _adapter.prisma.category.create({
            data: {
                ...category
            }
        });
    }
    static async delete(id) {
        const findCategory = await _adapter.prisma.category.findUnique({
            where: {
                id
            }
        });
        if (!findCategory) throw new _httpException.HttpException(404, "Category not found");
        return await _adapter.prisma.category.delete({
            where: {
                id
            }
        });
    }
    static async update(category) {
        const { id } = category;
        const findCategory = await _adapter.prisma.category.findUnique({
            where: {
                id
            }
        });
        if (!findCategory) throw new _httpException.HttpException(404, "Category not found");
        return await _adapter.prisma.category.update({
            where: {
                id
            },
            data: {
                ...category
            }
        });
    }
};

//# sourceMappingURL=category.service.js.map