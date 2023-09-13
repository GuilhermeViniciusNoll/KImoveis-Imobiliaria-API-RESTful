import 'reflect-metadata'
import 'express-async-errors'
import routes from './routes'
import express from 'express'
import middlewares from './middlewares'

const app = express()
app.use(express.json())

app.use("/users", routes.usersRoute)
app.use("/login", routes.loginRoute)
app.use("/schedules", routes.schedulesRoute)
app.use("/categories", routes.categoriesRoute)
app.use("/realEstate", routes.realEstateRoute)

app.use(middlewares.handleError)

export default app