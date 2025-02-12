import { HttpException } from "../exceptions/httpException";
import { NextFunction,Request,Response } from "express";

export const ErrorMiddleware = (error: HttpException, req:Request, res:Response, next:NextFunction) =>{
    try{
        const status = error.status || 500
        const message = error.message || 'Something went wrong'
        res.status(status).json({message})
    }catch(error){
        next(error)
    }
}