import "dotenv/config"
import "dotenv"
import appError from "../errors/appError"
import repositories from "../repositories"
import { TAddress, TCreateRealState, TRealState, TRealStateCompleted } from "../interfaces"

const createRealEstate = async (payload: TCreateRealState): Promise<TRealState> => {

    const { categoryId, address, ...body } = payload
    const addressVerify: TAddress | null = await repositories.addressRepo.findOneBy(address)
    if (addressVerify) throw new appError("Address already exists", 409)

    const newAddress: TAddress = repositories.addressRepo.create(address!)
    await repositories.addressRepo.save(newAddress)

    const category = await repositories.categoryRepo.findOneBy({ id: categoryId! })
    if (!category) throw new appError("Category Id not Found!", 404)


    const realEstate: TRealState = repositories.realEstateRepo.create({ ...body, category, address: newAddress })
    await repositories.realEstateRepo.save(realEstate)
    return realEstate
}

const getAllRealEstate = async (): Promise<TRealStateCompleted[]> => {

    const listRealEstate: Omit<TRealStateCompleted[], "schedules"> = await repositories.realEstateRepo.find({ relations: { address: true } })
    return listRealEstate
}

export { createRealEstate, getAllRealEstate }