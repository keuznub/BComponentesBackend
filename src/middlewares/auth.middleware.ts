import { NextFunction,  Request, Response } from "express"
import {CustomJwtPayload} from '../utils/customJwtPayload'
import { HttpException} from '../exceptions/httpException'
import jwt from 'jsonwebtoken'
import { SourceTextModule } from "vm"

const TOKEN_PASSWORD = process.env.TOKEN_PASSWORD || "pass"


export function isAuthenticate(req:Request, res:Response, next:NextFunction){
    const tokenReceived = req.cookies.token
    if(!tokenReceived) next(new HttpException(403, "Access Denied"))
    try{
        const tokenDecodificado = jwt.verify(tokenReceived,TOKEN_PASSWORD)
        req.user = tokenDecodificado as CustomJwtPayload
        next()
    }catch(error){
        next(error)
    }
}


