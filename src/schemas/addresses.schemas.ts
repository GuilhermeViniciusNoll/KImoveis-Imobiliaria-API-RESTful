import { z } from "zod"

const addressSchema = z.object({
    id: z.number().positive().int(),
    street: z.string().min(1).max(45),
    zipCode: z.string().min(1).max(8),
    number: z.number(),
    city: z.string().min(1).max(20),
    state: z.string().min(1).max(2)
})

const createAddressSchema = addressSchema.omit({ id: true })
const partialAddressSchema = addressSchema.partial()
const listAddressSchema = addressSchema.array()

export { addressSchema, partialAddressSchema, listAddressSchema, createAddressSchema } 