import express from 'express'

const PORT = 3333
const app = express()

app.use(express.json())

app.get('/', ( req, res) => {

    return res.json( { message: 'hello world'})
})

app.listen(PORT)