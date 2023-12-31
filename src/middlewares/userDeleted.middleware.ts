import appError from "../errors/appError"
import repositories from "../repositories"
import { TUser } from "../interfaces"
import { NextFunction, Request, Response } from "express"

const userDeleted = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const user: TUser | null = await repositories.userRepo.findOneBy({ email: String(req.body.email) })

    if (user) if (user.deletedAt) throw new appError("User deleted", 409)
    return next()
}

export default userDeleted