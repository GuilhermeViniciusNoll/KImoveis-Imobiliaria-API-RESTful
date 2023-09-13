import "dotenv"
import appError from "../errors/appError"
import repositories from "../repositories"
import { TUser } from "../interfaces"
import { NextFunction, Request, Response } from "express"

const verifyPermissionUpdateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const userInfo = res.locals.decoded
    const { admin, sub } = userInfo!
    const user: TUser | null = await repositories.userRepo.findOneBy({ id: Number(sub) })
    const userId: number = Number(req.params.id)

    if (!req.params.id) throw new appError("Invalid ID", 404)
    if (!(user!.id === userId) && !admin) throw new appError("Insufficient permission", 403)
    return next()
}

export default verifyPermissionUpdateUser