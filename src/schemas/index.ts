import { createAddressSchema, addressSchema } from "./addresses.schemas"
import { categorySchema, createCategorySchema, listCategorySchema, listRealStateByCategory } from "./categories.schemas"
import { scheduleSchema, createScheduleSchema, validScheduleSchema, scheduleCompletedSchema } from "./schedules.schemas"
import { validRealEstateSchema, realEstatesSchema, createRealEstatesSchema, realEstatesCompletedSchema } from "./realEstates.schemas"
import { userSchema, createUserSchema, partialUserSchema, dataUpdateUserSchema, loginRequest, userViewSchema, listUsersSchema } from "./users.schemas"

export default {
    scheduleSchema,
    createScheduleSchema,
    validScheduleSchema,
    scheduleCompletedSchema,
    listRealStateByCategory,
    dataUpdateUserSchema,
    validRealEstateSchema,
    createAddressSchema,
    realEstatesSchema,
    createRealEstatesSchema,
    realEstatesCompletedSchema,
    addressSchema,
    userSchema,
    createUserSchema,
    partialUserSchema,
    loginRequest,
    userViewSchema,
    listUsersSchema,
    categorySchema,
    createCategorySchema,
    listCategorySchema
}