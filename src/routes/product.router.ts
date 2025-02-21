import { Router } from "express";
import { ProductController } from "../controllers/product.controller";
import {isAuthenticate} from '../middlewares/auth.middleware'
import {isAdmin} from '../middlewares/isAdmin.middleware'
import { ValidationMiddleware } from "@/middlewares/validation.middleware";


const router = Router()

router.get("/",isAuthenticate, ProductController.getAll)
router.get("/:id",isAuthenticate, ProductController.getByID)
router.post("/",isAuthenticate,isAdmin,ValidationMiddleware, ProductController.save)
router.delete("/:id",isAuthenticate,isAdmin,ValidationMiddleware, ProductController.delete)
router.put("/:id",isAuthenticate,isAdmin,ValidationMiddleware, ProductController.update)

export default router