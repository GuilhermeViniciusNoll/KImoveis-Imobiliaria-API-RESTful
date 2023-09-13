import { z } from "zod"
import { userSchema } from "./users.schemas"
import { realEstatesSchema } from "./realEstates.schemas"

const scheduleSchema = z.object({
    id: z.number().positive().int(),
    date: z.string().refine((param) => {
        const parts = param.split("/")
        if (parts.length != 3) {
            return false
        }
        return true
    }, { message: "Invalid date format. Please use dd/mm/yy." }),
    hour: z.string().includes(":").length(5)
})

const createScheduleSchema = scheduleSchema.omit({ id: true }).extend({
    realEstate: realEstatesSchema,
    user: userSchema
})
const scheduleCompletedSchema = scheduleSchema.extend({
    realEstate: realEstatesSchema,
    user: userSchema
})
const validScheduleSchema = scheduleSchema.omit({ id: true }).extend({ realEstateId: z.number() })

export { scheduleSchema, createScheduleSchema, validScheduleSchema, scheduleCompletedSchema }