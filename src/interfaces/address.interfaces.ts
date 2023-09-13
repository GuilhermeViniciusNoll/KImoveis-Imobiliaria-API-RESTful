import schemas from "../schemas/index"

type TAddress = Zod.infer<typeof schemas.addressSchema>

export { TAddress }