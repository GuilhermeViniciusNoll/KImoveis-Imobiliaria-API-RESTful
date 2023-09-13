import "dotenv"
import appError from "../errors/appError"
import { NextFunction, Request, Response } from "express"

const verifyPermissionAdmin= async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const userInfo = res.locals.decoded

    if (!userInfo.admin) throw new appError("Insufficient permission", 403)
    return next()
}

export default verifyPermissionAdmin