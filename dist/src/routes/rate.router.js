import { Router } from "express";
import { RateController } from "../controllers/rate.controller";
import { isAuthenticate } from '../middlewares/auth.middleware';
var router = Router();
router.get("/", isAuthenticate, RateController.getAll);
router.get("/:id", isAuthenticate, RateController.getAvgByProductId);
router.put("/", isAuthenticate, RateController.save);
router.post("/", isAuthenticate, RateController.save);
router.delete("/:id", isAuthenticate, RateController.delete);
//router.put("/:id",isAuthenticate, RateController.update)
export default router;

//# sourceMappingURL=rate.router.js.map