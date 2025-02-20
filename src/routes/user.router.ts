import { Router } from "express";
import { ProductController } from "../controllers/product.controller";
import {isAuthenticate} from '../middlewares/auth.middleware'
import {isAdmin} from '../middlewares/isAdmin.middleware'
import { UserController } from "../controllers/user.controller";
import { profilePermission } from "@/middlewares/profilePermission.middleware";


const router = Router()

router.get("/",isAuthenticate, UserController.getAll)
router.get("/:id",isAuthenticate,profilePermission, UserController.getByID)
router.delete("/:id",isAuthenticate,isAdmin, UserController.delete)
router.put("/:id",isAuthenticate,isAdmin, UserController.update)

export default router