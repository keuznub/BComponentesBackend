import { NextFunction, Request, Response } from "express";
import { AuthService } from "../services/auth.service";
import { log } from "console";
import jwt from "jsonwebtoken";


export default class AuthController{

    static async register(req: Request, res:Response, next:NextFunction) {
        try{
        const userData = req.body
        const newUser = await AuthService.register(userData)
        res.status(201).json({message:"User register succesfully",user:newUser})
        }catch(error){
            next(error)
        }

    }


    static async login(req: Request, res:Response, next:NextFunction){
        try{
            const userData = req.body
            const token = await AuthService.login(userData)
            res.cookie('token',token, {
                maxAge:60*60*1000*3,
                httpOnly:true,
                secure: true,
                sameSite:"none",
                domain:"desinterfaces-exercisebackend.onrender.com"
            })
            
            const {id,role} : any = jwt.decode(token)
    
            res.status(201).json({message:"Login sucessfully",id,role})
            }catch(error){
                next(error)
            }

    }

    static async logout(req: Request, res:Response, next:NextFunction){
        try{
            res.clearCookie('token')
            res.status(201).json({message:"Logout sucessfully"})
            }catch(error){
                next(error)
            }

    }

}