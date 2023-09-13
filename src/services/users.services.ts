import "dotenv"
import "dotenv/config"
import schemas from "../schemas"
import appError from "../errors/appError"
import repositories from "../repositories"
import { Repository } from "typeorm"
import { compareSync } from "bcryptjs"
import { AppDataSource } from "../data-source"
import { TCreateUser, TListUsers, TLoginRequest, TPartialUser, TUpdateUser, TUser, TUserView } from "../interfaces"

const createUser = async (payload: TCreateUser): Promise<TUserView> => {

    const userRepo: Repository<TCreateUser> = AppDataSource.getRepository("users")
    const user: TCreateUser = userRepo.create(payload)
    await userRepo.save(user)

    const userRepoView: Repository<TUserView> = AppDataSource.getRepository("users")
    const userView: TUserView | null = await userRepoView.findOneBy({ email: user.email })
    return schemas.userViewSchema.parse(userView)
}

const login = async (payload: TLoginRequest): Promise<String> => {

    const userRepo: Repository<TUser> = AppDataSource.getRepository("users")
    const user: TUser | null = await userRepo.findOneBy({ email: String(payload.email) })
    if (!user) throw new appError("Invalid credentials", 401)

    const pass = compareSync(payload.password, user.password)
    if (!pass) throw new appError("Invalid credentials", 401)

    const jwt = require('jsonwebtoken')
    const token: string = jwt.sign(
        { admin: user.admin },
        String(process.env.SECRET_KEY),
        { expiresIn: String(process.env.EXPIRES_IN), subject: String(user.id) }
    )
    return token
}

const getAllUsers = async (): Promise<TListUsers> => {

    const userRepo: Repository<TUserView> = AppDataSource.getRepository("users")
    const listUsers: TListUsers = await userRepo.find()
    return schemas.listUsersSchema.parse(listUsers)
}

const updateUser = async (data: TUser, payload: Partial<TUpdateUser>): Promise<TPartialUser> => {

    !payload.name ? payload.name = data.name : null
    !payload.email ? payload.email = data.email : null
    !payload.password ? payload.password = data.password : null

    const newData: TUser = {
        ...data,
        name: payload.name,
        email: payload.email,
        password: payload.password
    }

    const newUser: TUser = await repositories.userRepo.save(newData)
    return schemas.userViewSchema.parse(newUser)
}

const deletedUser = async (payload: Omit<TUser, "deletedAt">) => {

    const userRepo: Repository<TUser> = AppDataSource.getRepository("users")
    await userRepo.softDelete(payload)
}

export { createUser, login, getAllUsers, updateUser, deletedUser }