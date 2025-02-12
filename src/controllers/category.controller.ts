import { NextFunction, Request,Response } from "express"
import { CategoryService } from "../services/category.service"
import { HttpException } from "../exceptions/httpException"

export class CategoryController{

    static async getAll(req: Request, res:Response, next:NextFunction){
        try{
            const categories = await CategoryService.getAll()
            res.status(201).json(categories)
        }catch(error){
            next(error)
        }
    }

    static async getByID(req: Request, res:Response, next:NextFunction){
        try{
            const id = Number.parseInt(req.params.id)
            if(isNaN(id)) throw new HttpException(400,"Bad request")
            const category = await CategoryService.getById(id)
            res.status(201).json(category)
        }catch(error){
            next(error)
        }
    }

    static async save(req: Request, res:Response, next:NextFunction){
        try{
            const category = req.body
            const result = await CategoryService.save(category)
            res.status(201).json(result)
        }catch(error){
            next(error)
        }
    }

    static async delete(req: Request, res:Response, next:NextFunction){
        try{
            const id = Number.parseInt(req.params.id)
            if(isNaN(id)) throw new HttpException(400,"Bad request")
            const result = await CategoryService.delete(id)
            res.status(201).json(result)
        }catch(error){
            next(error)
        }
    }

    static async update(req: Request, res:Response, next:NextFunction){
        try{
            const id = Number.parseInt(req.params.id)
            if(isNaN(id)) throw new HttpException(400,"Bad request")
            const product = req.body
            product.id = id
            const result = await CategoryService.update(product)
            res.status(201).json(result)
        }catch(error){
            next(error)
        }
    }


}