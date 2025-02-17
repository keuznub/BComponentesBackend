"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RateService", {
    enumerable: true,
    get: function() {
        return RateService;
    }
});
const _httpException = require("../exceptions/httpException");
const _adapter = require("../database/adapter");
let RateService = class RateService {
    static async getAll() {
        const findRates = await _adapter.prisma.rate.findMany();
        if (!findRates) throw new _httpException.HttpException(404, "Rates not found");
        return findRates;
    }
    static async getByProductId(idProduct) {
        const findRate = await _adapter.prisma.rate.findMany({
            where: {
                idProduct
            }
        });
        if (!findRate) throw new _httpException.HttpException(404, `Rates of product ${idProduct} not found`);
        return findRate;
    }
    static async getByUserId(idUser) {
        const findRate = await _adapter.prisma.rate.findMany({
            where: {
                idUser
            }
        });
        if (!findRate) throw new _httpException.HttpException(404, `Rates of user ${idUser} not found`);
        return findRate;
    }
    static async getAvgByProductId(idProduct) {
        const findRate = await _adapter.prisma.rate.aggregate({
            where: {
                idProduct
            },
            _avg: {
                value: true
            }
        });
        if (!findRate) throw new _httpException.HttpException(404, `Rates of product ${idProduct} not found`);
        return findRate._avg;
    }
    static async getByIds(idUser, idProduct) {
        const findRate = await _adapter.prisma.rate.findUnique({
            where: {
                idUser_idProduct: {
                    idUser,
                    idProduct
                }
            }
        });
        if (!findRate) throw new _httpException.HttpException(404, `Rate not found`);
        return findRate;
    }
    static async save(rate) {
        return await _adapter.prisma.rate.upsert({
            where: {
                idUser_idProduct: {
                    idUser: rate.idUser,
                    idProduct: rate.idProduct
                }
            },
            update: {
                ...rate
            },
            create: {
                ...rate
            }
        });
    }
    static async delete(idUser, idProduct) {
        const findRate = await _adapter.prisma.rate.findUnique({
            where: {
                idUser_idProduct: {
                    idUser,
                    idProduct
                }
            }
        });
        if (!findRate) throw new _httpException.HttpException(404, `Rate not found`);
        return await _adapter.prisma.rate.delete({
            where: {
                idUser_idProduct: {
                    idUser,
                    idProduct
                }
            }
        });
    }
};

//# sourceMappingURL=rate.service.js.map