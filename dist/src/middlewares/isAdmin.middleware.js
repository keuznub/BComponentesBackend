import { HttpException } from "../exceptions/httpException";
export function isAdmin(req, res, next) {
    try {
        var role = req.user.role;
        console.log(role);
        if (role != "admin") next(new HttpException(403, "Not permission"));
        next();
    } catch (error) {
        next(error);
    }
}

//# sourceMappingURL=isAdmin.middleware.js.map