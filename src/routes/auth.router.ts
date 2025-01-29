import { Router } from "express";
import AuthController from "../controllers/auth.controller";


const router = Router()

router.get("/login", AuthController.login)
router.get("/register", AuthController.register)

export default router