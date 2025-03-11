import { NextFunction, Request, Response } from "express"
import { ProductService } from "../services/product.service"
import { HttpException } from "../exceptions/httpException"
import { ProductQueryParams } from "@/types/productQueryParams"
import { json } from "stream/consumers"


export class ProductController {

    static async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const query: ProductQueryParams = req.query
            const products = await ProductService.getAll(query.page, query.name, query.category)
            res.status(201).json(products)
        } catch (error) {
            next(error)
        }
    }

    static async getByID(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number.parseInt(req.params.id)
            if (isNaN(id)) throw new HttpException(400, "Bad request")
            const product = await ProductService.getById(id)
            res.status(201).json(product)
        } catch (error) {
            next(error)
        }
    }

    static async save(req: Request, res: Response, next: NextFunction) {
        try {
            const product = req.body.product
            const categories = req.body.categories
            const result = await ProductService.save(product, categories)
            res.status(201).json(result)
        } catch (error) {
            next(error)
        }
    }

    static async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number.parseInt(req.params.id)
            if (isNaN(id)) throw new HttpException(400, "Bad request")
            const result = await ProductService.delete(id)
            res.status(201).json(result)
        } catch (error) {
            next(error)
        }
    }

    static async update(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number.parseInt(req.params.id)
            if (isNaN(id)) throw new HttpException(400, "Bad request")
            const product = req.body.product
            const categories = req.body.categories
            const result = await ProductService.update(id,product,categories)
            res.status(201).json(result)
        } catch (error) {
            next(error)
        }
    }


}