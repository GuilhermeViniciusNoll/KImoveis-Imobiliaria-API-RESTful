import schemas from "../schemas"
import controllers from "../controllers"
import middlewares from "../middlewares"
import { Router } from "express"

const schedulesRoute: Router = Router()

schedulesRoute.post("", middlewares.verifyToken, middlewares.validBody(schemas.validScheduleSchema), middlewares.verifyDateSchedule, controllers.createSchedule)
schedulesRoute.get("/realEstate/:id", middlewares.verifyToken, middlewares.verifyPermissionAdmin, middlewares.existRealEstate, controllers.getSchedulesByRealEstates)

export default schedulesRoute