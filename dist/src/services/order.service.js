"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "OrderService", {
    enumerable: true,
    get: function() {
        return OrderService;
    }
});
const _httpException = require("../exceptions/httpException");
const _adapter = require("../database/adapter");
let OrderService = class OrderService {
    static async getAll() {
        const findOrders = await _adapter.prisma.order.findMany({
            include: {
                orderProducts: true,
                user: {
                    select: {
                        id: true
                    }
                }
            }
        });
        if (!findOrders) throw new _httpException.HttpException(404, "Orders not found");
        return findOrders;
    }
    static async getById(id) {
        const findOrder = await _adapter.prisma.order.findUnique({
            where: {
                id
            }
        });
        if (!findOrder) throw new _httpException.HttpException(404, "Order not found");
        return findOrder;
    }
    static async save(orderProducts, idUser) {
        return await _adapter.prisma.order.create({
            data: {
                status: "pending",
                idUser: idUser,
                orderProducts: {
                    createMany: {
                        data: orderProducts
                    }
                }
            }
        });
    }
    static async delete(id) {
        const findOrder = await _adapter.prisma.order.findUnique({
            where: {
                id
            }
        });
        if (!findOrder) throw new _httpException.HttpException(404, "Order not found");
        return await _adapter.prisma.order.delete({
            where: {
                id
            }
        });
    }
    static async update(order) {
        const { id } = order;
        const findOrder = await _adapter.prisma.order.findUnique({
            where: {
                id
            }
        });
        if (!findOrder) throw new _httpException.HttpException(404, "Order not found");
        return await _adapter.prisma.order.update({
            where: {
                id
            },
            data: {
                ...order
            }
        });
    }
};

//# sourceMappingURL=order.service.js.map