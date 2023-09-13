import services from "../services"
import { Request, Response } from "express"
import { TRealStateCompleted, TSchedulesValid } from "../interfaces"

const createSchedule = async (req: Request, res: Response): Promise<Response> => {
    
    const payload: TSchedulesValid = req.body
    const schedule: string = await services.createSchedule(payload, res.locals.decoded.sub)
    return res.status(201).json({ "message": schedule })
}

const getSchedulesByRealEstates = async (req: Request, res: Response): Promise<Response> => {

    const id: number = res.locals.existRealEstate.id
    const schedule: TRealStateCompleted = await services.getSchedulesByRealEstates(id)
    return res.status(200).json(schedule)
}

export { createSchedule, getSchedulesByRealEstates }