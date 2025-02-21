import { Router } from "express";
import {OrderController  }  from "../controllers/order.controller"
import {isAuthenticate} from '../middlewares/auth.middleware'
import {isAdmin} from '../middlewares/isAdmin.middleware'
import { ValidationMiddleware } from "@/middlewares/validation.middleware";


const router = Router()

router.get("/",isAuthenticate, OrderController.getAllByUserId)
router.get("/:id",isAuthenticate, OrderController.getById)
router.post("/",isAuthenticate,ValidationMiddleware, OrderController.save)
router.delete("/:id",isAuthenticate,ValidationMiddleware, OrderController.delete)
router.put("/:id",isAuthenticate,ValidationMiddleware, OrderController.update)


export default router