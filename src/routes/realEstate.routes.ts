import schemas from "../schemas"
import controllers from "../controllers"
import middlewares from "../middlewares"
import { Router } from "express"

const realEstateRoute: Router = Router()

realEstateRoute.post("", middlewares.verifyToken, middlewares.verifyPermission, middlewares.validBody(schemas.validRealEstateSchema), controllers.createRealEstate)
realEstateRoute.get("", controllers.getAllRealEstate)

export default realEstateRoute