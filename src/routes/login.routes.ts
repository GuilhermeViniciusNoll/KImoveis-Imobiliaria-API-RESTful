import schemas from "../schemas"
import controllers from "../controllers"
import middlewares from "../middlewares"
import { Router } from "express"

const loginRoute: Router = Router()

loginRoute.post("", middlewares.validBody(schemas.loginRequest), middlewares.userDeleted, controllers.login)

export default loginRoute