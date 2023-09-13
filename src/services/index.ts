import { createRealEstate, getAllRealEstate } from "./realEstates.services"
import { createSchedule, getSchedulesByRealEstates } from "./schedules.services"
import { createUser, login, getAllUsers, updateUser, deletedUser } from "./users.services"
import { createCategory, getAllCategories, getRealEstatesByCategory } from "./categories.services"

export default {
    getSchedulesByRealEstates,
    createSchedule,
    createRealEstate,
    createUser, login,
    getAllUsers,
    updateUser,
    deletedUser,
    createCategory,
    getAllCategories,
    getAllRealEstate,
    getRealEstatesByCategory
}