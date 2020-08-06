import express from 'express'
const routes = express.Router()

routes.post('/classes', ( req, res) => {
   const data = req.body
   console.log(data)

    return res.send("ola")
})

export default routes