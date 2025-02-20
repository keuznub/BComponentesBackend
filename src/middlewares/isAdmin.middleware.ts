import { NextFunction, Request, Response } from "express"
import { HttpException } from "../exceptions/httpException";

export function isAdmin(req:Request, res:Response, next:NextFunction){
    try{
        if(!req.user)return
        const role = req.user.role
        if(role!="admin") throw new HttpException(403, "Not permission")
        next()
    }catch(error){
        next(error)
    }
}