import { z } from "zod"
import { realEstatesSchema } from "./realEstates.schemas"

const categorySchema = z.object({
    id: z.number().positive().int(),
    name: z.string().min(1).max(45),
})

const listCategorySchema = categorySchema.array()
const createCategorySchema = categorySchema.omit({ id: true })
const listRealStateByCategory = categorySchema.extend({ realEstate: realEstatesSchema.array() })

export { categorySchema, createCategorySchema, listCategorySchema, listRealStateByCategory } 