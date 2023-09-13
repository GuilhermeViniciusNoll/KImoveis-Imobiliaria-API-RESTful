import schemas from "../schemas/index"

type TCategory = Zod.infer<typeof schemas.categorySchema>
type TListCategory = Zod.infer<typeof schemas.listCategorySchema>
type TCreateCategory = Zod.infer<typeof schemas.createCategorySchema>
type TListRealStateByCategory = Zod.infer<typeof schemas.listRealStateByCategory>

export { TCategory, TCreateCategory, TListCategory, TListRealStateByCategory } 