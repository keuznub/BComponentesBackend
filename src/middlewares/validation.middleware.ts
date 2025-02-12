import { validationResult } from "express-validator";
import {Response, Request, NextFunction} from 'express'

export const ValidationMiddleware = (req: Request, res: Response,
    next: NextFunction): any => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        //next(new HttpException(400, {errors.array()}))
        return res.status(400).json({error: errors.array()});
    }
    next()
}
