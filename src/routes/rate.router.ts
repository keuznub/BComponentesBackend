import { Router } from "express";
import { RateController } from "../controllers/rate.controller";
import {isAuthenticate} from '../middlewares/auth.middleware'
import {isAdmin} from '../middlewares/isAdmin.middleware'
import { ValidationMiddleware } from "@/middlewares/validation.middleware";


const router = Router()

router.get("/",isAuthenticate, RateController.getAll)
router.get("/:id",isAuthenticate, RateController.getAvgByProductId)
router.put("/",isAuthenticate,ValidationMiddleware, RateController.save)
router.post("/",isAuthenticate,ValidationMiddleware, RateController.save)
router.delete("/:id",isAuthenticate,ValidationMiddleware, RateController.delete)
//router.put("/:id",isAuthenticate, RateController.update)

export default router