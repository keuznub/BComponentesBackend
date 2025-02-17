"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _express = require("express");
const _ordercontroller = require("../controllers/order.controller");
const _authmiddleware = require("../middlewares/auth.middleware");
const router = (0, _express.Router)();
router.get("/", _authmiddleware.isAuthenticate, _ordercontroller.OrderController.getAll);
router.get("/:id", _authmiddleware.isAuthenticate, _ordercontroller.OrderController.getById);
router.post("/", _authmiddleware.isAuthenticate, _ordercontroller.OrderController.save);
router.delete("/:id", _authmiddleware.isAuthenticate, _ordercontroller.OrderController.delete);
router.put("/:id", _authmiddleware.isAuthenticate, _ordercontroller.OrderController.update);
const _default = router;

//# sourceMappingURL=order.router.js.map