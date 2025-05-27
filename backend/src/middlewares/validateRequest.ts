import type { Request, Response, NextFunction } from "express-serve-static-core"
import { ZodError, ZodSchema } from "zod"

type ValidateOptions = {
    body?: ZodSchema,
    params?: ZodSchema,
    query?: ZodSchema
}


export const validateRequest = (schemas: ValidateOptions) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {

            if (schemas.body) {
                req.body = schemas.body.parse(req.body);
            }

            if (schemas.query) {
                req.query = schemas.query.parse(req.query);
            }

            if (schemas.params) {
                req.params = schemas.params.parse(req.params);
            }

            next()
        } catch (error) {
            if (error instanceof ZodError) {
                res.status(400).json({
                    message: "Validation Error",
                    errors: error.errors.map(err => ({
                        field: err.path.join("."),
                        err: err.message
                    }))
                })
                return;
            }
            next(error);
        }
    }
}

