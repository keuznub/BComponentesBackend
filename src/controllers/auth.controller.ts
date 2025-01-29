import { NextFunction, Request, Response } from "express";
import { AuthService } from "../services/auth.service";
import cookieParser from "cookie-parser";

export default  class AuthController{

    static async register(req: Request, res:Response, next:NextFunction) {
        try{
        const userData = req.body
        const newUser = await AuthService.register(userData)
        res.status(201).json({message:"Register succesfully",user:newUser})
        }catch(error){
            next(error)
        }

    }


    static async login(req: Request, res:Response, next:NextFunction){
        try{
            const userData = req.body
            const token = await AuthService.login(userData)
            res.cookie('token',token, {
                maxAge:60*60*1000,
                httpOnly:true,
                sameSite:"strict"
            })
            res.status(201).json({message:"Login sucessfully",token})
            }catch(error){
                next(error)
            }

    }

}