import { PrismaClient, Order, OrderProduct } from "@prisma/client"
import { HttpException } from "../exceptions/httpException"
const prisma = new PrismaClient()

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


    static async save(orderProducts: OrderProduct[], idUser: number) {
        return await prisma.order.create({
            data: {
                status:"pending",
                idUser:idUser,
                orderProducts:{createMany:{data : orderProducts}}
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