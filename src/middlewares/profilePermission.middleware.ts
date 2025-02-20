import { NextFunction, Request, Response } from "express"
import { HttpException } from "../exceptions/httpException";

export function profilePermission(req:Request, res:Response, next:NextFunction){
    try{
        if(!req.user)return
        if(!req.params.id) return
        if(req.user.role=="admin") return next()
        if(+req.params.id!=req.user.id) throw new HttpException(403, "Acess Denied to id")
        next()
    }catch(error){
        next(error)
    }
}