import { validationResult } from "express-validator";
export var ValidationMiddleware = function(req, res, next) {
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
        //next(new HttpException(400, {errors.array()}))
        return res.status(400).json({
            error: errors.array()
        });
    }
    next();
};

//# sourceMappingURL=validation.middleware.js.map