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
const _productcontroller = require("../controllers/product.controller");
const _authmiddleware = require("../middlewares/auth.middleware");
const _isAdminmiddleware = require("../middlewares/isAdmin.middleware");
const router = (0, _express.Router)();
router.get("/", _authmiddleware.isAuthenticate, _productcontroller.ProductController.getAll);
router.get("/:id", _authmiddleware.isAuthenticate, _productcontroller.ProductController.getByID);
router.post("/", _authmiddleware.isAuthenticate, _isAdminmiddleware.isAdmin, _productcontroller.ProductController.save);
router.delete("/:id", _authmiddleware.isAuthenticate, _isAdminmiddleware.isAdmin, _productcontroller.ProductController.delete);
router.put("/:id", _authmiddleware.isAuthenticate, _isAdminmiddleware.isAdmin, _productcontroller.ProductController.update);
const _default = router;

//# sourceMappingURL=product.router.js.map