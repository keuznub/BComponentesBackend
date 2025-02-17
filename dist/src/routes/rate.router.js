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
const _ratecontroller = require("../controllers/rate.controller");
const _authmiddleware = require("../middlewares/auth.middleware");
const router = (0, _express.Router)();
router.get("/", _authmiddleware.isAuthenticate, _ratecontroller.RateController.getAll);
router.get("/:id", _authmiddleware.isAuthenticate, _ratecontroller.RateController.getAvgByProductId);
router.put("/", _authmiddleware.isAuthenticate, _ratecontroller.RateController.save);
router.post("/", _authmiddleware.isAuthenticate, _ratecontroller.RateController.save);
router.delete("/:id", _authmiddleware.isAuthenticate, _ratecontroller.RateController.delete);
const _default = router;

//# sourceMappingURL=rate.router.js.map