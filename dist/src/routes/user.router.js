import { Router } from "express";
import { isAuthenticate } from '../middlewares/auth.middleware';
import { isAdmin } from '../middlewares/isAdmin.middleware';
import { UserController } from "../controllers/user.controller";
var router = Router();
router.get("/", isAuthenticate, UserController.getAll);
router.get("/:id", isAuthenticate, UserController.getByID);
router.delete("/:id", isAuthenticate, isAdmin, UserController.delete);
router.put("/:id", isAuthenticate, isAdmin, UserController.update);
export default router;

//# sourceMappingURL=user.router.js.map