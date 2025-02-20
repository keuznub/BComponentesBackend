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
            const validSameSiteValues = ["none", "lax", "strict"] as const; // Valores permitidos
            const sameSiteValue: "none" | "lax" | "strict" = validSameSiteValues.includes(process.env.COOKIE_SAME_SITE as "none" | "lax" | "strict")
            ? (process.env.COOKIE_SAME_SITE as "none" | "lax" | "strict")
            : "none"; // Si no es válido, usa "none" por defecto
            res.cookie('token',token, {
                maxAge:60*60*1000*3,
                httpOnly:true,
                secure: process.env.COOKIE_SECURE?process.env.COOKIE_SECURE==="true":false,
                sameSite: sameSiteValue,
            })
            
            const {id,role} : any = jwt.decode(token)
    
            res.status(201).json({message:"Login sucessfully",id,role})
            }catch(error){
                next(error)
            }
    }

    static async autoLogin(req: Request, res:Response, next:NextFunction){
        try{
            if(!req.user) return
            const {id, role} = req.user
            res.status(201).json({message:"AutoLogin sucessfully",id,role})
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