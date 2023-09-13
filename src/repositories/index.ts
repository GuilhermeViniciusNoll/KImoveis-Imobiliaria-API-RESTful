import { AppDataSource } from "../data-source"
import { Category, Address, RealEstate, Schedule, User } from "../entities"

const userRepo = AppDataSource.getRepository(User)
const addressRepo = AppDataSource.getRepository(Address)
const scheduleRepo = AppDataSource.getRepository(Schedule)
const categoryRepo = AppDataSource.getRepository(Category)
const realEstateRepo = AppDataSource.getRepository(RealEstate)

export default {
    categoryRepo,
    addressRepo,
    realEstateRepo,
    scheduleRepo,
    userRepo
}