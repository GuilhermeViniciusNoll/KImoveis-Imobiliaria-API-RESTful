import { z } from "zod"

const userSchema = z.object({
    id: z.number().positive().int(),
    name: z.string().min(1).max(45),
    email: z.string().email().min(1).max(45),
    admin: z.boolean(),
    password: z.string().min(1).max(120),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.union([z.string().datetime(), z.null()])
})

const createUserSchema = userSchema.omit({ id: true, createdAt: true, updatedAt: true, deletedAt: true }).partial({ admin: true })
const partialUserSchema = userSchema.partial()
const listUsersSchema = userSchema.omit({ password: true }).array()
const userViewSchema = userSchema.omit({ password: true })
const userViewSimpleSchema = userSchema.pick({ id: true, name: true, email: true })
const dataUpdateUserSchema = userSchema.pick({ email: true, name: true, password: true })
const loginRequest = userSchema.pick({ email: true, password: true })

export { userSchema, createUserSchema, partialUserSchema, loginRequest, userViewSchema, listUsersSchema, userViewSimpleSchema, dataUpdateUserSchema } 