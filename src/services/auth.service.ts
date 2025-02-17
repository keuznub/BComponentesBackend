import { PrismaClient, User } from "@prisma/client";
import { HttpException } from "../exceptions/httpException";
import bcrypt from 'bcrypt'
import { sign } from "crypto";
import jwt from "jsonwebtoken";
import {prisma} from 'database/adapter'

const TOKEN_PASSWORD = process.env.TOKEN_PASSWORD || "pass"

export class AuthService{

    static async register(user: User){
        const {email,username} = user
        const findUserEmail = await prisma.user.findUnique({where:{email}})
        if(findUserEmail) throw new HttpException(409,`Email ${user.email} already exists`)
        const findUser = await prisma.user.findUnique({where:{username}})
        if(findUser) throw new HttpException(409,`Username ${user.username} already exists`)


        const encryptedPassword = await bcrypt.hash(user.password,10)
        user.password = ''
        return prisma.user.create({
            data:{
                ...user, password:encryptedPassword, role:null
            },
            omit:{
                password: true
            } 
        })
    }

    static async login(user: User){
        
        const {username,email,password} = user
        const  findUser = email ? await prisma.user.findUnique({where:{email}}) : await prisma.user.findUnique({where:{username}})  
        if(!findUser) throw new HttpException(404,"User not found")

        const rightPasword =  await bcrypt.compare(password,findUser.password)
    
        if(!rightPasword) throw new HttpException(401,"Incorrect Password")
        
        return jwt.sign({id:findUser.id, role:findUser.role}, TOKEN_PASSWORD, {expiresIn:"1h"})
        
        
    }
}