import { PrismaClient, Order, OrderProduct } from "@prisma/client"
import { HttpException } from "../exceptions/httpException"
import {prisma} from 'database/adapter'

export class OrderService {

    static async getAll() {
        const findOrders = await prisma.order.findMany({ include: { orderProducts: true, user: { select: { id: true } } } })
        if (!findOrders) throw new HttpException(404, "Orders not found")
        return findOrders
    }

    static async getById(id: number) {
        const findOrder = await prisma.order.findUnique({ where: { id } })
        if (!findOrder) throw new HttpException(404, "Order not found")
        return findOrder
    }

    static async getAllByUserId(idUser: number) {
        const findOrder = await prisma.order.findMany({ where: { idUser },include:{orderProducts:{include:{product:true}}} })
        if (!findOrder) throw new HttpException(404, "Orders not found")
        return findOrder
    }


    static async save(orderProductsReceived: OrderProduct[], idUser: number) {
        return await prisma.order.create({
            data: {
                status:"pending",
                idUser:idUser,
                orderProducts: {create: orderProductsReceived.map(order=>({product:{connect:{id:order.idProduct}},quantity:order.quantity}))}
            }
        })
    }


    static async delete(id: number) {
        const findOrder = await prisma.order.findUnique({ where: { id } })
        if (!findOrder) throw new HttpException(404, "Order not found")
        return await prisma.order.delete({ where: { id } })
    }


    static async update(order: Order) {
        const { id } = order
        const findOrder = await prisma.order.findUnique({ where: { id } })
        if (!findOrder) throw new HttpException(404, "Order not found")
        return await prisma.order.update({ where: { id }, data: { ...order } })
    }


}