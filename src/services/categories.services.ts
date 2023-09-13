import "dotenv/config"
import "dotenv"
import schemas from "../schemas"
import appError from "../errors/appError"
import repositories from "../repositories"
import { TCategory, TCreateCategory, TListCategory, TListRealStateByCategory } from "../interfaces"

const createCategory = async (payload: TCreateCategory): Promise<TCategory> => {

    const uniqueName: TCategory | null = await repositories.categoryRepo.findOneBy({ name: payload.name })
    if (uniqueName) throw new appError("Category already exists", 409)

    const category: TCreateCategory = repositories.categoryRepo.create(payload)
    await repositories.categoryRepo.save(category)

    const categoryReturn: TCategory | null = await repositories.categoryRepo.findOneBy({ name: category.name })
    return schemas.categorySchema.parse(categoryReturn)
}

const getAllCategories = async (): Promise<TListCategory> => {

    const listCategories: TListCategory = await repositories.categoryRepo.find()
    return schemas.listCategorySchema.parse(listCategories)
}

const getRealEstatesByCategory = async (id: number): Promise<TListRealStateByCategory> => {

    const category = await repositories.categoryRepo.findOneBy({ id: id })
    if (!category) throw new appError("Category not found", 404)

    const listRealEstate: TListRealStateByCategory | null = await repositories.categoryRepo.findOne({ relations: { realEstate: true }, where: { id: id } })
    return schemas.listRealStateByCategory.parse(listRealEstate)
}

export { createCategory, getAllCategories, getRealEstatesByCategory }