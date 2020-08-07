import express from 'express'
import routes from './routes'
import cors from 'cors'

const PORT = 3333
const app = express()

app.use(express.json())
app.use(routes)

app.listen(PORT)