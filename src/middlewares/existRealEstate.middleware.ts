import appError from "../errors/appError"
import repositories from "../repositories"
import { TRealState } from "../interfaces"
import { NextFunction, Request, Response } from "express"

const existRealEstate = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const realEstate: TRealState | null = await repositories.realEstateRepo.findOneBy({ id: Number(req.params.id) })

    if (!realEstate) throw new appError("RealEstate not found", 404)
    res.locals = { ...res.locals, existRealEstate: realEstate }
    return next()
}

export default existRealEstate