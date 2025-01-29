import { PrismaClient, User } from "@prisma/client";
import { HttpExpection } from "../exceptions/HttpsException";
import bcrypt from 'bcrypt'


const prisma = new PrismaClient()
const TOKEN_PASSWORD = process.env.TOKEN_PASSWORD || "pass"

export class AuthService{

    static async register(user: User){
        const findUser = await prisma.user.findUnique({
            where:{
                email:user.email
            }
        })
        if(findUser) throw new HttpExpection(409,"User already exists")
        const encryptedPassword = await bcrypt.hash(user.password,10)
        
        return prisma.user.create({
            data:{
                ...user, password:encryptedPassword
            },
            omit:{
                password: true
            }
            
        })
        


    }

    static async login(user: User){
        const {email, password} = user
        const findUser = await prisma.user.findUnique({
            where:{
                email
            }
        })
        if(!findUser) throw new HttpExpection(404,"User not found")
        const bcrypt.compare(password,findUser.password)
        
        
    }
}