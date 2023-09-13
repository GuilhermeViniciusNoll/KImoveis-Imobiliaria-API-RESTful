import "dotenv"
import appError from "../errors/appError"
import { verify } from "jsonwebtoken"
import { NextFunction, Request, Response } from "express"

const verifyToken = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const header: String | undefined = req.headers.authorization
    if (!header || header === "") {
        throw new appError("Missing bearer token", 401)
    }

    const token: String = header.split(" ")[1]
    verify(String(token),
        process.env.SECRET_KEY!,
        (error: any, decoded: any) => {
            if (error) throw new appError(error.message, 401)
            res.locals = { ...res.locals, decoded }
        }
    )
    return next()
}

export default verifyToken