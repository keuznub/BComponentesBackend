import { Router } from "express";
import { RateController } from "../controllers/rate.controller";
import {isAuthenticate} from '../middlewares/auth.middleware'
import {isAdmin} from '../middlewares/isAdmin.middleware'


const router = Router()

router.get("/",isAuthenticate, RateController.getAll)
router.get("/:id",isAuthenticate, RateController.getByProductID)
router.put("/",isAuthenticate, RateController.save)
router.post("/",isAuthenticate, RateController.save)
router.delete("/:id",isAuthenticate, RateController.delete)
//router.put("/:id",isAuthenticate, RateController.update)

export default router