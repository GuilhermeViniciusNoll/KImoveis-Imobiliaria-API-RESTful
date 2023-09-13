import "dotenv"
import appError from "../errors/appError"
import { NextFunction, Request, Response } from "express"

const verifyDateSchedule = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const { hour, date } = req.body
    const dateRequest = new Date(String(date))

    if ((new Date(`${dateRequest.getMonth()} ${dateRequest.getDate()}, ${dateRequest.getFullYear()} ${String(hour)}`).getTime() <
        new Date(`${dateRequest.getMonth()} ${dateRequest.getDate()}, ${dateRequest.getFullYear()} 08:00`).getTime()) ||
        (new Date(`${dateRequest.getMonth()} ${dateRequest.getDate()}, ${dateRequest.getFullYear()} ${String(hour)}`).getTime() >
            new Date(`${dateRequest.getMonth()} ${dateRequest.getDate()}, ${dateRequest.getFullYear()} 18:00`).getTime())) {
        throw new appError("Invalid hour, available times are 8AM to 18PM", 400)
    }
    if (!(Number(dateRequest.getDay()) > 0 && Number(dateRequest.getDay()) < 6)) throw new appError("Invalid date, work days are monday to friday", 400)

    return next()
}

export default verifyDateSchedule