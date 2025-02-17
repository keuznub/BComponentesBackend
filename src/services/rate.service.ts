import { PrismaClient, Rate  } from "@prisma/client"
import { HttpException } from "../exceptions/httpException"
import {prisma} from 'database/adapter'

export class RateService{
    
    static async getAll(){
        const findRates = await prisma.rate.findMany()
        if(!findRates) throw new HttpException(404,"Rates not found")
        return findRates
    }

    static async getByProductId(idProduct: number){
        const findRate = await prisma.rate.findMany({where:{idProduct}})
        if(!findRate) throw new HttpException(404,`Rates of product ${idProduct} not found`)
        return findRate
    }

    static async getByUserId(idUser: number){
        const findRate = await prisma.rate.findMany({where:{idUser}})
        if(!findRate) throw new HttpException(404,`Rates of user ${idUser} not found`)
        return findRate
    }

    static async getAvgByProductId(idProduct: number){
        const findRate = await prisma.rate.aggregate({
            where:{idProduct},
            _avg:{value:true},
        })
        if(!findRate) throw new HttpException(404,`Rates of product ${idProduct} not found`)
        
        return findRate._avg
    }

    static async getByIds(idUser: number, idProduct:number){
        const findRate = await prisma.rate.findUnique({where:{idUser_idProduct:{idUser,idProduct}}})
        if(!findRate) throw new HttpException(404,`Rate not found`)
        return findRate
    }


    static async save(rate: Rate){

        return await prisma.rate.upsert({
            where:{
                idUser_idProduct:{idUser:rate.idUser,idProduct:rate.idProduct}
            },
            update:{...rate},
            create:{...rate}
        })
    }

    static async delete(idUser: number, idProduct: number){
        const findRate = await prisma.rate.findUnique({where:{idUser_idProduct:{idUser,idProduct}}})
        if(!findRate) throw new HttpException(404,`Rate not found`)
        return await prisma.rate.delete({where:{idUser_idProduct:{idUser,idProduct}}})
    }





}