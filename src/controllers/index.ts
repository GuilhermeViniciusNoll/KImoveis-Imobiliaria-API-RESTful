import { createUser, login, getAllUsers, updateUser, deletedUser } from "./users.controllers"
import { createCategory, getAllCategories, getRealEstatesByCategory } from "./categories.controllers"
import { createRealEstate, getAllRealEstate } from "./realStates.controllers"
import { createSchedule, getSchedulesByRealEstates } from "./schedules.controllers"

export default {
    getSchedulesByRealEstates,
    createSchedule,
    createRealEstate,
    createUser,
    login,
    getAllUsers,
    updateUser,
    deletedUser,
    createCategory,
    getAllCategories,
    getAllRealEstate,
    getRealEstatesByCategory
}