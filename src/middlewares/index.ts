import validBody from "./validBody.middleware"
import userExistById from "./userExistById.middleware"
import userExistByIdByEmail from "./userExistByEmail.middleware"
import handleError from "./handleError.middleware"
import userDeleted from "./userDeleted.middleware"
import verifyToken from "./verifyToken.middleware"
import existRealEstate from "./existRealEstate.middleware"
import verifyPermissionAdmin from "./verifyPermissionAdmin.middleware."
import verifyPermissionUpdateUser from "./verifyPermissionUpdateUser.middleware"
import verifyDateSchedule from "./verifyDateSchedule.middleware"

export default {
    existRealEstate,
    handleError,
    validBody,
    userExistByIdByEmail,
    userExistById,
    verifyPermissionAdmin,
    userDeleted,
    verifyToken,
    verifyPermissionUpdateUser,
    verifyDateSchedule
}