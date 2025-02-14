function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
import { PrismaClient } from "@prisma/client";
import { HttpException } from "../exceptions/httpException";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
var prisma = new PrismaClient();
var TOKEN_PASSWORD = process.env.TOKEN_PASSWORD || "pass";
export var AuthService = /*#__PURE__*/ function() {
    "use strict";
    function AuthService() {
        _class_call_check(this, AuthService);
    }
    _create_class(AuthService, null, [
        {
            key: "register",
            value: function register(user) {
                return _async_to_generator(function() {
                    var email, username, findUserEmail, findUser, encryptedPassword;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                email = user.email, username = user.username;
                                return [
                                    4,
                                    prisma.user.findUnique({
                                        where: {
                                            email: email
                                        }
                                    })
                                ];
                            case 1:
                                findUserEmail = _state.sent();
                                if (findUserEmail) throw new HttpException(409, "Email ".concat(user.email, " already exists"));
                                return [
                                    4,
                                    prisma.user.findUnique({
                                        where: {
                                            username: username
                                        }
                                    })
                                ];
                            case 2:
                                findUser = _state.sent();
                                if (findUser) throw new HttpException(409, "Username ".concat(user.username, " already exists"));
                                return [
                                    4,
                                    bcrypt.hash(user.password, 10)
                                ];
                            case 3:
                                encryptedPassword = _state.sent();
                                user.password = '';
                                return [
                                    2,
                                    prisma.user.create({
                                        data: _object_spread_props(_object_spread({}, user), {
                                            password: encryptedPassword,
                                            role: null
                                        }),
                                        omit: {
                                            password: true
                                        }
                                    })
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "login",
            value: function login(user) {
                return _async_to_generator(function() {
                    var username, email, password, findUser, _tmp, rightPasword;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                username = user.username, email = user.email, password = user.password;
                                if (!email) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    prisma.user.findUnique({
                                        where: {
                                            email: email
                                        }
                                    })
                                ];
                            case 1:
                                _tmp = _state.sent();
                                return [
                                    3,
                                    4
                                ];
                            case 2:
                                return [
                                    4,
                                    prisma.user.findUnique({
                                        where: {
                                            username: username
                                        }
                                    })
                                ];
                            case 3:
                                _tmp = _state.sent();
                                _state.label = 4;
                            case 4:
                                findUser = _tmp;
                                if (!findUser) throw new HttpException(404, "User not found");
                                return [
                                    4,
                                    bcrypt.compare(password, findUser.password)
                                ];
                            case 5:
                                rightPasword = _state.sent();
                                if (!rightPasword) throw new HttpException(401, "Incorrect Password");
                                return [
                                    2,
                                    jwt.sign({
                                        id: findUser.id,
                                        role: findUser.role
                                    }, TOKEN_PASSWORD, {
                                        expiresIn: "1h"
                                    })
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return AuthService;
}();

//# sourceMappingURL=auth.service.js.map