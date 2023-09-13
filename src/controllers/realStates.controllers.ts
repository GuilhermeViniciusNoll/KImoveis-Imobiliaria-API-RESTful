import services from "../services"
import { Request, Response } from "express"
import { TCreateRealState, TRealStateCompleted, TRealState } from "../interfaces"

const createRealEstate = async (req: Request, res: Response): Promise<Response> => {

    const payload: TCreateRealState = req.body
    const realEstate: TRealState = await services.createRealEstate(payload)
    return res.status(201).json(realEstate)
}

const getAllRealEstate = async (req: Request, res: Response): Promise<Response> => {

    const listRealEstate: TRealStateCompleted[] = await services.getAllRealEstate()
    return res.status(200).json(listRealEstate)
}

export { createRealEstate, getAllRealEstate }