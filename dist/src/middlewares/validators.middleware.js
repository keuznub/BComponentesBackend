"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    loginValidation: function() {
        return loginValidation;
    },
    registerValidation: function() {
        return registerValidation;
    }
});
const _expressvalidator = require("express-validator");
const registerValidation = [
    (0, _expressvalidator.body)('email').isEmail().withMessage('Invalid email'),
    (0, _expressvalidator.body)('password').isLength({
        min: 4
    }).withMessage('Password too short'),
    (0, _expressvalidator.body)('name').notEmpty().withMessage('Name required')
];
const loginValidation = [
    (0, _expressvalidator.body)('email').isEmail().withMessage('Invalid email'),
    (0, _expressvalidator.body)('password').notEmpty().withMessage('Password required')
];

//# sourceMappingURL=validators.middleware.js.map