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
const _authcontroller = /*#__PURE__*/ _interop_require_default(require("../controllers/auth.controller"));
const _validationmiddleware = require("../middlewares/validation.middleware");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const router = (0, _express.Router)();
router.post("/login", _validationmiddleware.ValidationMiddleware, _authcontroller.default.login);
router.post("/logout", _validationmiddleware.ValidationMiddleware, _authcontroller.default.logout);
router.post("/register", _validationmiddleware.ValidationMiddleware, _authcontroller.default.register);
const _default = router;

//# sourceMappingURL=auth.router.js.map