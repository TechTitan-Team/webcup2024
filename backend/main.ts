import { Response, Request } from "express"
import express from "express"
import cors from "cors"
import userRoute from './src/routes/users'
import https from 'https'
import fs from 'fs'
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

const options = {
  key: fs.readFileSync(__dirname + '/private.key', 'utf8'),
 cert: fs.readFileSync(__dirname + '/public.cert', 'utf8')
};

app.use('/api/users', userRoute)

https.createServer(app).listen(9001, function(){
  console.log("Express server listening on port " + 9001);
});