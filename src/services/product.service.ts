import { PrismaClient, Product  } from "@prisma/client"
import { HttpException } from "../exceptions/httpException"
import { create } from "domain"
const prisma = new PrismaClient()

export class ProductService{
    
    static async getAll(){
        const findProducts = await prisma.product.findMany({include:{rates:true,categoryProduct:true}})
        if(!findProducts) throw new HttpException(404,"Products not found")
        return findProducts
    }

    static async getById(id: number){
        const findProduct = await prisma.product.findUnique({where:{id},include:{rates:{include:{user:true}},categoryProduct:true}})
        if(!findProduct) throw new HttpException(404,"Product not found")
        return findProduct
    }


    static async save(product: Product, categoriesId: number[]){        
        return await prisma.product.create({data:{...product,categoryProduct:{connect:{idCategory:categoriesId[0]}}}})
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