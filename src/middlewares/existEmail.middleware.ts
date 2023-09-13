import appError from "../errors/appError"
import { TUser } from "../interfaces"
import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"

const existEmail = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const userRepo: Repository<TUser> = AppDataSource.getRepository("users")
    const user: TUser | null = await userRepo.findOneBy({ email: String(req.body.email) })
    
    if (user) throw new appError("Email already exists", 409)
    return next()
}

export default existEmail