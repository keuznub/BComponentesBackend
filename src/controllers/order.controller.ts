import { NextFunction, Request,Response } from "express"
import { OrderService } from "../services/order.service"
import { HttpException } from "../exceptions/httpException"
import { OrderProduct } from "@prisma/client"
import { log } from "console"

export class OrderController{

    static async getAll(req: Request, res:Response, next:NextFunction){
        try{
            const orders = await OrderService.getAll()
            res.status(201).json(orders)
        }catch(error){
            next(error)
        }
    }

    static async getById(req: Request, res:Response, next:NextFunction){
        try{
            const id = Number.parseInt(req.params.id)
            if(isNaN(id)) throw new HttpException(400,"Bad request")
            const order = await OrderService.getById(id)
            res.status(201).json(order)
        }catch(error){
            next(error)
        }
    }

    static async getAllByUserId(req: Request, res:Response, next:NextFunction){
        try{
            const userId = req.user?.id
            if(!userId) return next(new HttpException(403, "Access Denied"))
            const orders = await OrderService.getAllByUserId(userId)
            res.status(201).json(orders)
        }catch(error){
            next(error)
        }
    }

    static async save(req: Request, res:Response, next:NextFunction){
        try{
            const orderProduct : OrderProduct[] = req.body
            console.log(orderProduct);
            if(!req.user)return
            const idUser = req.user.id
            const result = await OrderService.save(orderProduct, idUser)
            res.status(201).json("Order created")
        }catch(error){
            next(error)
        }
    }



    static async delete(req: Request, res:Response, next:NextFunction){
        try{
            const id = Number.parseInt(req.params.id)
            if(isNaN(id)) throw new HttpException(400,"Bad request")
            const result = await OrderService.delete(id)
            res.status(201).json(result)
        }catch(error){
            next(error)
        }
    }

    static async update(req: Request, res:Response, next:NextFunction){
        try{
            const id = Number.parseInt(req.params.id)
            if(isNaN(id)) throw new HttpException(400,"Bad request")
            const order = req.body
            order.id = id
            const result = await OrderService.update(order)
            res.status(201).json(result)
        }catch(error){
            next(error)
        }
    }


}