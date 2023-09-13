import appError from "../errors/appError"
import { TUser } from "../interfaces"
import { NextFunction, Request, Response } from "express"
import repositories from "../repositories"

const userExistById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    if (!req.params.id) throw new appError("Invalid ID", 404)

    const user: TUser | null = await repositories.userRepo.findOneBy({ id: Number(req.params.id) })

    if (!user) {
        throw new appError("User not found", 404)
    } else {
        if (user.deletedAt) throw new appError("User deleted", 409)
    }
    res.locals = { ...res.locals, userExistById: user }
    return next()
}

export default userExistById