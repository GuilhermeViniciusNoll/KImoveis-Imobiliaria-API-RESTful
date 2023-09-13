import { z } from "zod"
import { categorySchema } from "./categories.schemas"
import { scheduleCompletedSchema } from "./schedules.schemas"
import { createAddressSchema, addressSchema } from "./addresses.schemas"

const realEstatesSchema = z.object({
    id: z.number().positive().int(),
    sold: z.boolean(),
    value: z.union([z.number(), z.string()]).default(0),
    size: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
})

const createRealEstatesSchema = realEstatesSchema.omit({ id: true, createdAt: true, updatedAt: true, sold: true }).extend({
    address: addressSchema,
    categoryId: z.number().int()
})
const realEstatesCompletedSchema = realEstatesSchema.extend({
    address: addressSchema,
    category: categorySchema,
    schedules: scheduleCompletedSchema.omit({ realEstate: true }).array()
})
const validRealEstateSchema = z.object({
    value: z.union([z.number(), z.string()]).default(0),
    size: z.number().gt(0),
    address: createAddressSchema,
    categoryId: z.number()
})

export { realEstatesSchema, createRealEstatesSchema, realEstatesCompletedSchema, validRealEstateSchema }