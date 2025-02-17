"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ProductService", {
    enumerable: true,
    get: function() {
        return ProductService;
    }
});
const _httpException = require("../exceptions/httpException");
const _adapter = require("../database/adapter");
let ProductService = class ProductService {
    static async getAll() {
        const findProducts = await _adapter.prisma.product.findMany({
            include: {
                rates: true,
                categoryProduct: {
                    include: {
                        category: true
                    }
                }
            }
        });
        if (!findProducts) throw new _httpException.HttpException(404, "Products not found");
        return findProducts;
    }
    static async getById(id) {
        const findProduct = await _adapter.prisma.product.findUnique({
            where: {
                id
            },
            include: {
                rates: {
                    include: {
                        user: true
                    }
                },
                categoryProduct: true
            }
        });
        if (!findProduct) throw new _httpException.HttpException(404, "Product not found");
        return findProduct;
    }
    static async save(product, categoriesId) {
        return await _adapter.prisma.product.create({
            data: {
                ...product,
                categoryProduct: {
                    create: categoriesId.map((id)=>({
                            category: {
                                connect: {
                                    id
                                }
                            }
                        }))
                }
            }
        });
    }
    static async delete(id) {
        const findProduct = await _adapter.prisma.product.findUnique({
            where: {
                id
            }
        });
        if (!findProduct) throw new _httpException.HttpException(404, "Product not found");
        return await _adapter.prisma.product.delete({
            where: {
                id
            }
        });
    }
    static async update(product) {
        const { id } = product;
        const findProduct = await _adapter.prisma.product.findUnique({
            where: {
                id
            }
        });
        if (!findProduct) throw new _httpException.HttpException(404, "Product not found");
        return await _adapter.prisma.product.update({
            where: {
                id
            },
            data: {
                ...product
            }
        });
    }
};

//# sourceMappingURL=product.service.js.map