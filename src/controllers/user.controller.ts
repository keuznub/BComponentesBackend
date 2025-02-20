import { NextFunction, Request,Response } from "express"
import { ProductService } from "../services/product.service"
import { HttpException } from "../exceptions/httpException"
import { UserService } from "../services/user.service"
import { log } from "console"
import { prisma } from "@/database/adapter"

export class UserController{

    static async getAll(req: Request, res:Response, next:NextFunction){
        try{
            const users = await UserService.getAll()
            res.status(201).json(users)
        }catch(error){
            next(error)
        }
    }

    static async getByID(req: Request, res:Response, next:NextFunction){
        try{
            const id = Number.parseInt(req.params.id)
            if(isNaN(id)) throw new HttpException(400,"Bad request")
            const user = await UserService.getById(id)
            res.status(201).json(user)
        }catch(error){
            next(error)
        }
    }

    static async delete(req: Request, res:Response, next:NextFunction){
        try{
            const id = Number.parseInt(req.params.id)
            if(isNaN(id)) throw new HttpException(400,"Bad request")
            const result = await UserService.delete(id)
            res.status(201).json(result)
        }catch(error){
            next(error)
        }
    }

    static async update(req: Request, res:Response, next:NextFunction){
        try{
            console.log("update solicitado");
            console.log(req.body);
            const id = Number.parseInt(req.params.id)
            if(isNaN(id)) throw new HttpException(400,"Bad request")
            const user = req.body
            user.id = id
            const result = await UserService.update(user)
            res.status(201).json("Updated")
        }catch(error){
            next(error)
        }
    }


}