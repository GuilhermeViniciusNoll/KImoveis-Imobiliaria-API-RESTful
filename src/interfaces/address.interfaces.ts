import schemas from "../schemas/index"

type TAddress = Zod.infer<typeof schemas.addressSchema>
type TListAddress = Zod.infer<typeof schemas.listAddressSchema>
type TCreateAddress = Zod.infer<typeof schemas.createAddressSchema>

export { TAddress, TListAddress, TCreateAddress }