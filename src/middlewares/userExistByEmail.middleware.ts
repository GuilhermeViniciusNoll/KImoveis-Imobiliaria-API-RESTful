import appError from "../errors/appError"
import repositories from "../repositories"
import { TUser } from "../interfaces"
import { NextFunction, Request, Response } from "express"

const userExistByIdByEmail = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const user: TUser | null = await repositories.userRepo.findOneBy({ email: String(req.body.email) })
    
    if (user) throw new appError("Email already exists", 409)
    return next()
}

export default userExistByIdByEmail