import appError from "../errors/appError"
import { TUser } from "../interfaces"
import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"

const userExist = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    if (!req.params.id) throw new appError("Invalid ID", 404)

    const userRepo: Repository<TUser> = AppDataSource.getRepository("users")
    const user: TUser | null = await userRepo.findOneBy({ id: Number(req.params.id) })

    if (!user) {
        throw new appError("User not found", 404)
    } else {
        if (user.deletedAt) throw new appError("User deleted", 409)
    }
    res.locals = { ...res.locals, user: user }
    return next()
}

export default userExist