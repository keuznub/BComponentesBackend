import { PrismaClient, User  } from "@prisma/client"
import { HttpException } from "../exceptions/httpException"
const prisma = new PrismaClient()

export class UserService{
    
    static async getAll(){
        const findUsers = await prisma.user.findMany()
        if(!findUsers) throw new HttpException(404,"Users not found")
        return findUsers
    }

    static async getById(id: number){
        const findUser = await prisma.user.findUnique({where:{id}})
        if(!findUser) throw new HttpException(404,"User not found")
        return findUser
    }

    static async delete(id: number){
        const findUser = await prisma.user.findUnique({where:{id}})
        if(!findUser) throw new HttpException(404,"User not found")
        return await prisma.user.delete({where:{id}})
    }

    static async update(user: User){
        const {id} = user
        const findUser = await prisma.user.findUnique({where:{id}})
        if(!findUser) throw new HttpException(404,"User not found")
        return await prisma.user.update({where:{id},data:{...user}})
    }




}