import schemas from "../schemas"
import controllers from "../controllers"
import middlewares from "../middlewares"
import { Router } from "express"

const categoriesRoute: Router = Router()

categoriesRoute.post("", middlewares.validBody(schemas.createCategorySchema), middlewares.verifyToken, middlewares.verifyPermissionAdmin, controllers.createCategory)
categoriesRoute.get("", controllers.getAllCategories)
categoriesRoute.get("/:id/realEstate", controllers.getRealEstatesByCategory)

export default categoriesRoute