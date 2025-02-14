import { Router } from "express";
import { ProductController } from "../controllers/product.controller";
import { isAuthenticate } from '../middlewares/auth.middleware';
import { isAdmin } from '../middlewares/isAdmin.middleware';
var router = Router();
router.get("/", isAuthenticate, ProductController.getAll);
router.get("/:id", isAuthenticate, ProductController.getByID);
router.post("/", isAuthenticate, isAdmin, ProductController.save);
router.delete("/:id", isAuthenticate, isAdmin, ProductController.delete);
router.put("/:id", isAuthenticate, isAdmin, ProductController.update);
export default router;

//# sourceMappingURL=product.router.js.map