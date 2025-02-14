export var ErrorMiddleware = function(error, req, res, next) {
    try {
        var status = error.status || 500;
        var message = error.message || 'Something went wrong';
        res.status(status).json({
            message: message
        });
    } catch (error) {
        next(error);
    }
};

//# sourceMappingURL=error.middleware.js.map