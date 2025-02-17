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
const _express = /*#__PURE__*/ _interop_require_wildcard(require("express"));
const _cors = /*#__PURE__*/ _interop_require_default(require("cors"));
const _helmet = /*#__PURE__*/ _interop_require_default(require("helmet"));
const _expressratelimit = /*#__PURE__*/ _interop_require_default(require("express-rate-limit"));
const _compression = /*#__PURE__*/ _interop_require_default(require("compression"));
const _cookieparser = /*#__PURE__*/ _interop_require_default(require("cookie-parser"));
const _authrouter = /*#__PURE__*/ _interop_require_default(require("./routes/auth.router"));
const _productrouter = /*#__PURE__*/ _interop_require_default(require("./routes/product.router"));
const _categoryrouter = /*#__PURE__*/ _interop_require_default(require("./routes/category.router"));
const _raterouter = /*#__PURE__*/ _interop_require_default(require("./routes/rate.router"));
const _orderrouter = /*#__PURE__*/ _interop_require_default(require("./routes/order.router"));
const _userrouter = /*#__PURE__*/ _interop_require_default(require("./routes/user.router"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const app = (0, _express.default)();
app.use(_express.default.json({
    limit: '50mb'
}));
app.use((0, _express.urlencoded)({
    limit: '50mb',
    extended: true
}));
app.use((0, _helmet.default)());
app.use((0, _compression.default)());
app.use((0, _cookieparser.default)());
app.use((0, _expressratelimit.default)({
    max: 100000,
    windowMs: 1000 * 15 * 60
}));
app.use((0, _cors.default)({
    origin: [
        'http://localhost:5173'
    ],
    methods: [
        'GET',
        'POST',
        'PUT',
        'DELETE'
    ],
    credentials: true,
    allowedHeaders: [
        'Content-Type',
        'Authorization'
    ]
}));
app.use("/api/auth", _authrouter.default);
app.use("/api/products", _productrouter.default);
app.use("/api/categories", _categoryrouter.default);
app.use("/api/rates", _raterouter.default);
app.use("/api/orders", _orderrouter.default);
app.use("/api/users", _userrouter.default);
const _default = app;

//# sourceMappingURL=app.js.map