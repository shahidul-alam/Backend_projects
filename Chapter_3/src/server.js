import express from 'express'
import path , {dirname} from 'path'
import { fileURLToPath } from 'url'
import authRoutes from './routes/authRoutes.js'
import todoRoutes from './routes/todoRoutes.js'

const app = express()

const PORT= 5000 || process.env.PORT


//Get the file path from the URL of the current module

const __filename= fileURLToPath(import.meta.url)

//GEt the directory name from the file path

const __dirname= dirname(__filename)

//Middleware
app.use(express.json())
//serves the HTML file from the /public directory

app.use(express.static(path.join(__dirname,'../public')))


//serving up the HTML file from the  /public directory
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'))
})

app.use('/auth', authRoutes)
app.use('/todos', todoRoutes)

app.listen(PORT, (req,res)=>{
    console.log(`server running on port:${PORT}`)
})