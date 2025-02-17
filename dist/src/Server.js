"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _app = /*#__PURE__*/ _interop_require_default(require("./app"));
const _adapter = require("./database/adapter");
const _errormiddleware = require("./middlewares/error.middleware");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
_app.default.use(_errormiddleware.ErrorMiddleware);
_app.default.use(async (req, res, next)=>{
    await _adapter.libsql.sync();
    next();
});
_app.default.listen(process.env.PORT, ()=>{
    console.log("Servidor encendido en el puerto", process.env.PORT);
});

//# sourceMappingURL=server.js.map