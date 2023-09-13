import validBody from "./validBody.middleware"
import userExist from "./userExist.middleware"
import existEmail from "./existEmail.middleware"
import handleError from "./handleError.middleware"
import userDeleted from "./userDeleted.middleware"
import verifyToken from "./verifyToken.middleware"
import existRealEstate from "./existRealEstate.middleware"
import verifyPermission from "./verifyPermission.middleware."
import verifyPermissionUpdate from "./verifyPermissionUpdate.middleware"

export default {
    existRealEstate,
    handleError,
    validBody,
    existEmail,
    userExist,
    verifyPermission,
    userDeleted,
    verifyToken,
    verifyPermissionUpdate
}