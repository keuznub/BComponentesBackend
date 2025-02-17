import { NextFunction, Request,Response } from "express"
import { RateService } from "../services/rate.service"
import { HttpException } from "../exceptions/httpException"

export class RateController{

    static async getAll(req: Request, res:Response, next:NextFunction){
        try{
            const products = await RateService.getAll()
            res.status(201).json(products)
        }catch(error){
            next(error)
        }
    }

    static async getByProductId(req: Request, res:Response, next:NextFunction){
        try{
            const id = req.body
            const rate = await RateService.getByProductId(id)
            res.status(201).json(rate)
        }catch(error){
            next(error)
        }
    }

    static async getAvgByProductId(req: Request, res:Response, next:NextFunction){
        try{
            const id = req.body
            const rate = await RateService.getAvgByProductId(id)
            res.status(201).json(rate)
        }catch(error){
            next(error)
        }
    }


    
    static async getByUserId(req: Request, res:Response, next:NextFunction){
        try{
            if(!req.user)return
            const id = req.user.id
            const rate = await RateService.getByUserId(id)
            res.status(201).json(rate)
        }catch(error){
            next(error)
        }
    }

    static async getByIds(req: Request, res:Response, next:NextFunction){
        try{
            if(!req.user)return
            const idProduct = req.body
            const idUser = req.user.id
            const rate = await RateService.getByIds(idUser,idProduct)
            res.status(201).json(rate)
        }catch(error){
            next(error)
        }
    }

    static async save(req: Request, res:Response, next:NextFunction){
        try{
            const rate = req.body
            if(!req.user)return
            rate.idUser = req.user.id
            const result = await RateService.save(rate)
            res.status(201).json(result)
        }catch(error){
            next(error)
        }
    }



    static async delete(req: Request, res:Response, next:NextFunction){
        try{
            const idProduct = req.body
            if(!req.user)return
            const idUser = req.user.id
            const result = await RateService.delete(idUser,idProduct)
            res.status(201).json(result)
        }catch(error){
            next(error)
        }
    }



}