import { body } from 'express-validator';
export var registerValidation = [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({
        min: 4
    }).withMessage('Password too short'),
    body('name').notEmpty().withMessage('Name required')
];
export var loginValidation = [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').notEmpty().withMessage('Password required')
];

//# sourceMappingURL=validators.middleware.js.map