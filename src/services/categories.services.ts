import "dotenv/config"
import "dotenv"
import schemas from "../schemas"
import appError from "../errors/appError"
import repositories from "../repositories"
import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { TCategory, TCreateCategory, TListCategory, TListRealStateByCategory } from "../interfaces"

const createCategory = async (payload: TCreateCategory): Promise<TCategory> => {

    const uniqueRepo: Repository<TCategory> = AppDataSource.getRepository("categories")
    const uniqueName: TCategory | null = await uniqueRepo.findOneBy({ name: payload.name })
    if (uniqueName) throw new appError("Category already exists", 409)

    const categoryRepo: Repository<TCreateCategory> = AppDataSource.getRepository("categories")
    const category: TCreateCategory = categoryRepo.create(payload)
    await categoryRepo.save(category)

    const categoryRepoReturn: Repository<TCategory> = AppDataSource.getRepository("categories")
    const categoryReturn: TCategory | null = await categoryRepoReturn.findOneBy({ name: category.name })
    return schemas.categorySchema.parse(categoryReturn)
}

const getAllCategories = async (): Promise<TListCategory> => {

    const categoryRepo: Repository<TCategory> = AppDataSource.getRepository("categories")
    const listCategories: TListCategory = await categoryRepo.find()
    return schemas.listCategorySchema.parse(listCategories)
}

const getRealEstatesByCategory = async (id: number): Promise<TListRealStateByCategory> => {

    const category = await repositories.categoryRepo.findOneBy({ id: id })
    if (!category) throw new appError("Category not found", 404)

    const listRealEstate: TListRealStateByCategory | null = await repositories.categoryRepo.findOne({ relations: { realEstate: true }, where: { id: id } })
    return listRealEstate!
}

export { createCategory, getAllCategories, getRealEstatesByCategory }