import { z } from "zod"
import { createAddressSchema, addressSchema } from "./addresses.schemas"
import { categorySchema, createCategorySchema } from "./categories.schemas"
import { scheduleCompletedSchema, scheduleSchema } from "./schedules.schemas"

const realEstatesSchema = z.object({
    id: z.number().positive().int(),
    sold: z.boolean(),
    value: z.union([z.number(), z.string()]).default(0),
    size: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
})

const createRealEstatesSchema = realEstatesSchema.omit({ id: true, createdAt: true, updatedAt: true, sold: true }).extend({
    address: z.object({
        street: z.string().max(45),
        zipCode: z.string().max(8),
        number: z.number(),
        city: z.string().max(20),
        state: z.string().max(2),
    }), categoryId: z.number().int()
})
const createRealEstatesObjectSchema = realEstatesSchema.omit({ id: true, createdAt: true, updatedAt: true, sold: true }).extend({ address: createAddressSchema, category: createCategorySchema })
const partialRealEstatesSchema = realEstatesSchema.deepPartial()
const RealEstatesCompletedSchema = realEstatesSchema.extend({ address: addressSchema, category: categorySchema, schedules: scheduleCompletedSchema.omit({ realEstate: true }).array() })
const validRealEstateSchema = z.object({
    value: z.union([z.number(), z.string()]).default(0),
    size: z.number().gt(0),
    address: createAddressSchema,
    categoryId: z.number()
})

const validRealEstateReturnSchema = realEstatesSchema.extend({ address: addressSchema, category: categorySchema, schedules: scheduleSchema })
export { validRealEstateReturnSchema, realEstatesSchema, createRealEstatesSchema, partialRealEstatesSchema, RealEstatesCompletedSchema, validRealEstateSchema, createRealEstatesObjectSchema }