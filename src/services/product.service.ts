import { PrismaClient, Product  } from "@prisma/client"
import { HttpException } from "../exceptions/httpException"
import { create } from "domain"
import {prisma} from 'database/adapter'

export class ProductService{
    
    static async getAll(page?:number,name?:string,categoryName?:string){
        const PAGE_SIZE = 8 
        const findProducts = await prisma.product.findMany({include:{rates:true,categoryProduct:{include:{category:true}}},
            ...(page&&{skip:(page)*PAGE_SIZE}),
            ...(page&&{take:PAGE_SIZE}),
                where:{
            ...(name&&{name:{contains:name}}),
            ...(categoryName&&{categoryProduct:{some:{category:{name:categoryName}}}})},
            
        }

        )
        const productsCount = await prisma.product.count({
            where:{
                ...(name&&{name:{contains:name}}),
                ...(categoryName&&{categoryProduct:{some:{category:{name:categoryName}}}})},
        })

        if(!findProducts) throw new HttpException(404,"Products not found")

        return {products:findProducts,count:productsCount}
    }

    static async getById(id: number){
        const findProduct = await prisma.product.findUnique({where:{id},include:{rates:{include:{user:true}},categoryProduct:true}})
        if(!findProduct) throw new HttpException(404,"Product not found")
        return findProduct
    }


    static async save(product: Product, categoriesId: number[]){        
        return await prisma.product.create({data:{...product,
            categoryProduct: {create: categoriesId.map(id=>({category:{connect:{id}}}))}
        }})
    }

    static async delete(id: number){
        const findProduct = await prisma.product.findUnique({where:{id}})
        if(!findProduct) throw new HttpException(404,"Product not found")
        await prisma.categoryProduct.deleteMany({where:{idProduct:id}})
        await prisma.orderProduct.deleteMany({where:{idProduct:id}})
        await prisma.rate.deleteMany({where:{idProduct:id}})
        await prisma.order.deleteMany({where:{orderProducts:{none: { idProduct: { not: undefined } }}}})
        return await prisma.product.delete({where:{id}})
    }

    static async update(id:number,product: Product, categoriesId: number[]){
        const findProduct = await prisma.product.findUnique({where:{id}})
        if(!findProduct) throw new HttpException(404,"Product not found")
            return await prisma.product.update({where:{id} ,data:{...product,
                categoryProduct: {deleteMany:{},create: categoriesId.map(id=>({category:{connect:{id}}}))},
                rates:{}
            }})
    }




}