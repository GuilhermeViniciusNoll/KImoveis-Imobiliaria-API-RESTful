import services from "../services"
import { Request, Response } from "express"
import { TCategory, TCreateCategory, TListCategory, TListRealStateByCategory } from "../interfaces/categories.interfaces"

const createCategory = async (req: Request, res: Response): Promise<Response> => {

    const payload: TCreateCategory = req.body
    const category: TCategory = await services.createCategory(payload)
    return res.status(201).json(category)
}

const getAllCategories = async (req: Request, res: Response): Promise<Response> => {

    const list: TListCategory = await services.getAllCategories()
    return res.status(200).json(list)
}

const getRealEstatesByCategory = async (req: Request, res: Response): Promise<Response> => {
    
    const id: number = Number(req.params.id)
    const list: TListRealStateByCategory = await services.getRealEstatesByCategory(id)
    return res.status(200).json(list)
}

export { createCategory, getAllCategories, getRealEstatesByCategory }