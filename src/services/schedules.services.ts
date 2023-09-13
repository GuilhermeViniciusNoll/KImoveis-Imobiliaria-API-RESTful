import "dotenv"
import "dotenv/config"
import appError from "../errors/appError"
import repositories from "../repositories"
import { TCreateSchedules, TRealStateCompleted, TSchedules, TSchedulesReturn, TSchedulesValid, TUser } from "../interfaces"

const createSchedule = async (payload: TSchedulesValid, idUser: number): Promise<string> => {

    const { hour, date } = payload
    const scheduleUser: TSchedules[] = await repositories.scheduleRepo.find({ where: { user: { id: idUser } } })
    if (scheduleUser.length != 0) throw new appError("User schedule to this real estate at this date and time already exists", 409)

    const realEstateExist: Omit<TRealStateCompleted, "schedules"> | null = await repositories.realEstateRepo.findOneBy({ id: payload.realEstateId })
    if (!realEstateExist) throw new appError("RealEstate not found", 404)

    const verifySchedule: TSchedules | null = await repositories.scheduleRepo.findOne({ where: { realEstate: { id: realEstateExist.id } } })
    if (verifySchedule) throw new appError("Schedule to this real estate at this date and time already exists", 409)

    const user: TUser | null = await repositories.userRepo.findOneBy({ id: idUser })
    const data: TCreateSchedules = {
        hour: hour,
        date: date,
        user: user!,
        realEstate: realEstateExist
    }

    const schedule: TSchedulesReturn = repositories.scheduleRepo.create(data)
    await repositories.scheduleRepo.save(schedule)
    return "Schedule created"
}

const getSchedulesByRealEstates = async (id: number): Promise<TRealStateCompleted> => {

    const realEstate: TRealStateCompleted | null = await repositories.realEstateRepo.findOne({ relations: { schedules: { user: true }, category: true, address: true }, where: { id: id } })
    return realEstate!
}

export { createSchedule, getSchedulesByRealEstates }