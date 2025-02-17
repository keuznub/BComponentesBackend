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
const _categorycontroller = require("../controllers/category.controller");
const _authmiddleware = require("../middlewares/auth.middleware");
const _isAdminmiddleware = require("../middlewares/isAdmin.middleware");
const router = (0, _express.Router)();
router.get("/", _authmiddleware.isAuthenticate, _categorycontroller.CategoryController.getAll);
router.get("/:id", _authmiddleware.isAuthenticate, _categorycontroller.CategoryController.getByID);
router.post("/", _authmiddleware.isAuthenticate, _isAdminmiddleware.isAdmin, _categorycontroller.CategoryController.save);
router.delete("/:id", _authmiddleware.isAuthenticate, _isAdminmiddleware.isAdmin, _categorycontroller.CategoryController.delete);
router.put("/:id", _authmiddleware.isAuthenticate, _isAdminmiddleware.isAdmin, _categorycontroller.CategoryController.update);
const _default = router;

//# sourceMappingURL=category.router.js.map