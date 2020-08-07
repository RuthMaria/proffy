import express from 'express'
import ClassesController from './controllers/classesController'
import ConnectionsController from './controllers/connectionsController'

const routes = express.Router()
const classesControllers = new ClassesController()
const connectionsController = new ConnectionsController()

routes.get('/classes', classesControllers.index)
routes.post('/classes', classesControllers.create)

routes.post('/connections', connectionsController.create)

export default routes