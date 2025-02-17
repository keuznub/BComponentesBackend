"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ValidationMiddleware", {
    enumerable: true,
    get: function() {
        return ValidationMiddleware;
    }
});
const _expressvalidator = require("express-validator");
const ValidationMiddleware = (req, res, next)=>{
    const errors = (0, _expressvalidator.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            error: errors.array()
        });
    }
    next();
};

//# sourceMappingURL=validation.middleware.js.map