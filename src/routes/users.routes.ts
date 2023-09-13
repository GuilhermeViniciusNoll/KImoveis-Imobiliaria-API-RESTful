import schemas from "../schemas"
import controllers from "../controllers"
import middlewares from "../middlewares"
import { Router } from "express"

const usersRoute: Router = Router()

usersRoute.post("", middlewares.validBody(schemas.createUserSchema), middlewares.userExistByIdByEmail, controllers.createUser)
usersRoute.get("", middlewares.verifyToken, middlewares.verifyPermissionAdmin, controllers.getAllUsers)
usersRoute.patch("/:id", middlewares.validBody(schemas.partialUserSchema), middlewares.userExistById, middlewares.verifyToken, middlewares.verifyPermissionUpdateUser, middlewares.validBody(schemas.partialUserSchema), middlewares.userExistByIdByEmail, controllers.updateUser)
usersRoute.delete("/:id", middlewares.userExistById, middlewares.verifyToken, middlewares.verifyPermissionAdmin, controllers.deletedUser)

export default usersRoute