import { Response, Request } from "express"
import express from "express"
import cors from "cors"
import userRoute from './src/routes/users'
import routerPartenaire from "./src/routes/partenaires"
import routerCommands from "./src/routes/commands"
const app = express()

app.use(cors())
app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.get('/api',(req:Request, res:Response) => {
  res.send('Hello from Tech-Titan API')
})

app.get('/api/test',(req:Request, res:Response) => {
  res.send({
    message: "Bonjour à tous"
  })
})

app.use('/api/users', userRoute)
app.use('/api/partenaires', routerPartenaire)
app.use('/api/commands', routerCommands)

app.listen(9001, () => console.log("Api listen on port 9001"))