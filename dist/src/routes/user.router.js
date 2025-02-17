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
const _authmiddleware = require("../middlewares/auth.middleware");
const _isAdminmiddleware = require("../middlewares/isAdmin.middleware");
const _usercontroller = require("../controllers/user.controller");
const router = (0, _express.Router)();
router.get("/", _authmiddleware.isAuthenticate, _usercontroller.UserController.getAll);
router.get("/:id", _authmiddleware.isAuthenticate, _usercontroller.UserController.getByID);
router.delete("/:id", _authmiddleware.isAuthenticate, _isAdminmiddleware.isAdmin, _usercontroller.UserController.delete);
router.put("/:id", _authmiddleware.isAuthenticate, _isAdminmiddleware.isAdmin, _usercontroller.UserController.update);
const _default = router;

//# sourceMappingURL=user.router.js.map