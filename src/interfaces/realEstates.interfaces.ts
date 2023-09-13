import schemas from "../schemas/index"

type TRealState = Zod.infer<typeof schemas.realEstatesSchema>
type TCreateRealState = Zod.infer<typeof schemas.createRealEstatesSchema>
type TPartialRealEstates = Zod.infer<typeof schemas.partialRealEstatesSchema>
type TRealEstateReturn = Zod.infer<typeof schemas.validRealEstateReturnSchema>
type TRealStateCompleted = Zod.infer<typeof schemas.RealEstatesCompletedSchema>
type TCreateRealEstatesObject = Zod.infer<typeof schemas.createRealEstatesObjectSchema>

export { TRealEstateReturn, TPartialRealEstates, TRealState, TCreateRealState, TRealStateCompleted, TCreateRealEstatesObject } 