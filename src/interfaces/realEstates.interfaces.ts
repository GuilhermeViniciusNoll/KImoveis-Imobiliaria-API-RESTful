import schemas from "../schemas/index"

type TRealState = Zod.infer<typeof schemas.realEstatesSchema>
type TCreateRealState = Zod.infer<typeof schemas.createRealEstatesSchema>
type TRealStateCompleted = Zod.infer<typeof schemas.realEstatesCompletedSchema>

export { TRealState, TCreateRealState, TRealStateCompleted } 