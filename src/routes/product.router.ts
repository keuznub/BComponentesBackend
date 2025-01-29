import { Router } from "express";
import { ProductController } from "../controllers/product.controller";
import {isAuthenticate} from '../middlewares/auth.middleware'


const router = Router()

router.get("/",isAuthenticate, ProductController.getAll)

export default router