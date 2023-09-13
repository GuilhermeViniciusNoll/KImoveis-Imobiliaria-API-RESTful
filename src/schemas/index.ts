import { createAddressSchema, addressSchema, partialAddressSchema, listAddressSchema } from "./addresses.schemas"
import { categorySchema, createCategorySchema, listCategorySchema, listRealStateByCategory } from "./categories.schemas"
import { scheduleSchema, createScheduleSchema, validScheduleSchema, scheduleCompletedSchema, partialScheduleSchema, listScheduleSchema } from "./schedules.schemas"
import { userSchema, createUserSchema, partialUserSchema, dataUpdateUserSchema, loginRequest, userViewSchema, listUsersSchema, userViewSimpleSchema } from "./users.schemas"
import { validRealEstateReturnSchema, createRealEstatesObjectSchema, validRealEstateSchema, realEstatesSchema, createRealEstatesSchema, partialRealEstatesSchema, RealEstatesCompletedSchema } from "./realEstates.schemas"

export default {
    scheduleSchema,
    createScheduleSchema,
    validScheduleSchema,
    scheduleCompletedSchema,
    partialScheduleSchema,
    listScheduleSchema,
    listRealStateByCategory,
    dataUpdateUserSchema,
    validRealEstateReturnSchema,
    createRealEstatesObjectSchema,
    validRealEstateSchema,
    createAddressSchema,
    realEstatesSchema,
    createRealEstatesSchema,
    partialRealEstatesSchema,
    RealEstatesCompletedSchema,
    addressSchema,
    partialAddressSchema,
    listAddressSchema,
    userSchema,
    createUserSchema,
    partialUserSchema,
    loginRequest,
    userViewSchema,
    listUsersSchema,
    userViewSimpleSchema,
    categorySchema,
    createCategorySchema,
    listCategorySchema
}