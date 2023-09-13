import schemas from "../schemas"
import controllers from "../controllers"
import middlewares from "../middlewares"
import { Router } from "express"

const schedulesRoute: Router = Router()

schedulesRoute.post("", middlewares.verifyToken, middlewares.validBody(schemas.validScheduleSchema), controllers.createSchedule)
schedulesRoute.get("/realEstate/:id", middlewares.verifyToken, middlewares.verifyPermission, middlewares.existRealEstate, controllers.getSchedulesByRealEstates)

export default schedulesRoute