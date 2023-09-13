import services from "../services"
import { Request, Response } from "express"
import { TCreateUser, TListUsers, TLoginRequest, TPartialUser, TUser, TUserView } from "../interfaces/users.interfaces"

const createUser = async (req: Request, res: Response): Promise<Response> => {

    const payload: TCreateUser = req.body
    const user: TUserView = await services.createUser(payload)
    return res.status(201).json(user)
}

const login = async (req: Request, res: Response): Promise<Response> => {

    const payload: TLoginRequest = req.body
    const token: String = await services.login(payload)
    return res.status(200).json({ token: token })
}

const getAllUsers = async (req: Request, res: Response): Promise<Response> => {

    const listUsers: TListUsers = await services.getAllUsers()
    return res.status(200).json(listUsers)
}

const updateUser = async (req: Request, res: Response): Promise<Response> => {

    const payload: TCreateUser = req.body
    const data: TUser = res.locals.userExistById
    const newUser: TPartialUser = await services.updateUser(data, payload)
    return res.status(200).json(newUser)
}

const deletedUser = async (req: Request, res: Response,): Promise<Response> => {

    const payload: TUser = res.locals.userExistById
    await services.deletedUser(payload)
    return res.status(204).send()
}

export { createUser, login, getAllUsers, updateUser, deletedUser }