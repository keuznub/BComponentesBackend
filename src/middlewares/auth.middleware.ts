import { NextFunction,  Request, Response } from "express"
import { validate } from "express-validation"
import { HttpExpection} from '../exceptions/HttpsException'
import jwt from 'jsonwebtoken'

const TOKEN_PASSWORD = process.env.TOKEN_PASSWORD || "pass"


export function isAuthenticate(req:Request, res:Response, next:NextFunction){
    const tokenReceived = req.cookies.token
    if(!tokenReceived) next(new HttpExpection(403, "Access Denied"))
    try{
        const tokenDecodificado = jwt.verify(tokenReceived,TOKEN_PASSWORD)
        req.body.user = tokenDecodificado
        next()
    }catch(error){
        next(error)
    }
}