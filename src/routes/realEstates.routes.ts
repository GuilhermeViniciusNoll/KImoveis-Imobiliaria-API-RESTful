import schemas from "../schemas"
import controllers from "../controllers"
import middlewares from "../middlewares"
import { Router } from "express"

const realEstatesRoute: Router = Router()

realEstatesRoute.post("", middlewares.verifyToken, middlewares.verifyPermissionAdmin, middlewares.validBody(schemas.validRealEstateSchema), controllers.createRealEstate)
realEstatesRoute.get("", controllers.getAllRealEstate)

export default realEstatesRoute