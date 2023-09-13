import schemas from "../schemas"
import controllers from "../controllers"
import middlewares from "../middlewares"
import { Router } from "express"

const usersRoute: Router = Router()

usersRoute.post("", middlewares.validBody(schemas.createUserSchema), middlewares.existEmail, controllers.createUser)
usersRoute.get("", middlewares.verifyToken, middlewares.verifyPermission, controllers.getAllUsers)
usersRoute.patch("/:id", middlewares.validBody(schemas.partialUserSchema), middlewares.userExist, middlewares.verifyToken, middlewares.verifyPermissionUpdate, middlewares.validBody(schemas.partialUserSchema), middlewares.existEmail, controllers.updateUser)
usersRoute.delete("/:id", middlewares.userExist, middlewares.verifyToken, middlewares.verifyPermission, controllers.deletedUser)

export default usersRoute