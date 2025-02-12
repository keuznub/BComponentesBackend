import { PrismaClient, Product  } from "@prisma/client"
import { HttpException } from "../exceptions/httpException"
const prisma = new PrismaClient()

export class ProductService{
    
    static async getAll(){
        const findProducts = await prisma.product.findMany()
        if(!findProducts) throw new HttpException(404,"Products not found")
        return findProducts
    }

    static async getById(id: number){
        const findProduct = await prisma.product.findUnique({where:{id}})
        if(!findProduct) throw new HttpException(404,"Product not found")
        return findProduct
    }


    static async save(product: Product){
        return await prisma.product.create({data:{...product}})
    }

    static async delete(id: number){
        const findProduct = await prisma.product.findUnique({where:{id}})
        if(!findProduct) throw new HttpException(404,"Product not found")
        return await prisma.product.delete({where:{id}})
    }

    static async update(product: Product){
        const {id} = product
        const findProduct = await prisma.product.findUnique({where:{id}})
        if(!findProduct) throw new HttpException(404,"Product not found")
        return await prisma.product.update({where:{id},data:{...product}})
    }




}