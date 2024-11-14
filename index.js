import express from 'express'
import config from'dotenv'
import { problemRouter } from './Routers/problemRouter.js'
import { Questions } from './Models/Question.js'
import  connect  from './DataBase/MongoDb.js'
config.config()
const app = express()

connect()
app.use(express.json())


app.use('/problems',problemRouter)
app.listen(process.env.PORT || 8000,()=>console.log(`http://localhost:${process.env.PORT}/`))
