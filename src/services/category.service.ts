import { PrismaClient, Category  } from "@prisma/client"
import { HttpException } from "../exceptions/httpException"
import {prisma} from 'database/adapter'

export class CategoryService{
    
    static async getAll(){
        const findCategory = await prisma.category.findMany()
        if(!findCategory) throw new HttpException(404,"Category not found")
        return findCategory
    }

    static async getById(id: number){
        const findCategory = await prisma.category.findUnique({where:{id}})
        if(!findCategory) throw new HttpException(404,"Category not found")
        return findCategory
    }


    static async save(category: Category){
        return await prisma.category.create({data:{...category}})
    }

    static async delete(id: number){
        await prisma.categoryProduct.deleteMany({where:{idCategory:id}})
        const findCategory = await prisma.category.findUnique({where:{id}})
        if(!findCategory) throw new HttpException(404,"Category not found")
        return await prisma.category.delete({where:{id}})
    }

    static async update(category: Category){
        const {id} = category
        const findCategory = await prisma.category.findUnique({where:{id}})
        if(!findCategory) throw new HttpException(404,"Category not found")
        return await prisma.category.update({where:{id},data:{...category}})
    }




}