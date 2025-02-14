import { Router } from "express";
import AuthController from "../controllers/auth.controller";
import { ValidationMiddleware } from "../middlewares/validation.middleware";
var router = Router();
router.post("/login", ValidationMiddleware, AuthController.login);
router.post("/logout", ValidationMiddleware, AuthController.logout);
router.post("/register", ValidationMiddleware, AuthController.register);
export default router;

//# sourceMappingURL=auth.router.js.map