import "dotenv"
import appError from "../errors/appError"
import { TUser } from "../interfaces"
import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"

const verifyPermissionUpdate = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const userInfo = res.locals.decoded
    const { admin, sub } = userInfo!
    const userRepo: Repository<TUser> = AppDataSource.getRepository("users")
    const user: TUser | null = await userRepo.findOneBy({ id: Number(sub) })
    const userId: number = Number(req.params.id)

    if (!req.params.id) throw new appError("Invalid ID", 404)
    if (!(user!.id === userId) && !admin) throw new appError("Insufficient permission", 403)
    return next()
}

export default verifyPermissionUpdate