require('dotenv').config()
import { Response, Request } from "express"
import express from "express"
import cors from "cors"
import userRoute from './src/routes/users'
import routerPartenaire from "./src/routes/partenaires"
import routerCommands from "./src/routes/commands"
import fileUpload from "express-fileupload";
import compression from 'compression';
import path from 'path';

const app = express()

app.use(cors())
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(fileUpload({
  createParentPath: true
}));
app.use(compression());

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

const localImages = process.env.ENV && process.env.ENV == "developpement" ? '/images' : '../images'
app.use('/images', express.static(path.join(__dirname, localImages)));

app.listen(9001, () => console.log("Api listen on port 9001"))