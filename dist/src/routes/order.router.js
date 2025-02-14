import { Router } from "express";
import { OrderController } from "../controllers/order.controller";
import { isAuthenticate } from '../middlewares/auth.middleware';
var router = Router();
router.get("/", isAuthenticate, OrderController.getAll);
router.get("/:id", isAuthenticate, OrderController.getById);
router.post("/", isAuthenticate, OrderController.save);
router.delete("/:id", isAuthenticate, OrderController.delete);
router.put("/:id", isAuthenticate, OrderController.update);
export default router;

//# sourceMappingURL=order.router.js.map