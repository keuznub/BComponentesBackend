import { Router } from "express";
import AuthController from "../controllers/auth.controller";
import {ValidationMiddleware} from "../middlewares/validation.middleware"
import { isAuthenticate } from "@/middlewares/auth.middleware";

const router = Router()

router.post("/login",ValidationMiddleware, AuthController.login)
router.post("/logout",ValidationMiddleware, AuthController.logout)
router.post("/register",ValidationMiddleware, AuthController.register)
router.get("/autoLogin",isAuthenticate, AuthController.autoLogin)

export default router