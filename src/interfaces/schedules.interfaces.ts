import schemas from "../schemas/index"

type TSchedules = Zod.infer<typeof schemas.scheduleSchema>
type TListSchedules = Zod.infer<typeof schemas.listScheduleSchema>
type TSchedulesValid = Zod.infer<typeof schemas.validScheduleSchema>
type TCreateSchedules = Zod.infer<typeof schemas.createScheduleSchema>
type TPartialSchedules = Zod.infer<typeof schemas.partialScheduleSchema>
type TSchedulesReturn = Zod.infer<typeof schemas.scheduleCompletedSchema>

export { TSchedules, TCreateSchedules, TListSchedules, TPartialSchedules, TSchedulesReturn, TSchedulesValid } 