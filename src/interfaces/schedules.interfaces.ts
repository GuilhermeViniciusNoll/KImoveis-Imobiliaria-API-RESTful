import schemas from "../schemas/index"

type TSchedules = Zod.infer<typeof schemas.scheduleSchema>
type TSchedulesValid = Zod.infer<typeof schemas.validScheduleSchema>
type TCreateSchedules = Zod.infer<typeof schemas.createScheduleSchema>
type TSchedulesReturn = Zod.infer<typeof schemas.scheduleCompletedSchema>

export { TSchedules, TCreateSchedules, TSchedulesReturn, TSchedulesValid } 