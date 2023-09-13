import schemas from "../schemas/index"

type TUser = Zod.infer<typeof schemas.userSchema>
type TUserView = Zod.infer<typeof schemas.userViewSchema>
type TLoginRequest = Zod.infer<typeof schemas.loginRequest>
type TListUsers = Zod.infer<typeof schemas.listUsersSchema>
type TCreateUser = Zod.infer<typeof schemas.createUserSchema>
type TPartialUser = Zod.infer<typeof schemas.partialUserSchema>
type TUpdateUser = Zod.infer<typeof schemas.dataUpdateUserSchema>

export { TUser, TCreateUser, TPartialUser, TLoginRequest, TUserView, TListUsers, TUpdateUser } 