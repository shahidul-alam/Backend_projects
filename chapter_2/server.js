//The address of this server connected to the network is:
// URL -> http://localhost:8383

const express= require('express')
const app= express()
const PORT=8383

let data=["james"]

//Middleware
app.use(express.json())


//type-1: website endpoint
app.get('/',(req,res)=>{
    res.send(`
        <body>
            <p>${JSON.stringify(data)}</p>
        </body>`)
})


app.get('/dashboard', (req,res)=>{
    res.send("<h1>Dashboard</h1>")

})

//type-2: API endpoint

//CRUD operation-Method
//Create-POST Read-GET Update-PUT Delete-DELETE




app.get('/api/data', (req,res)=>{

    console.log("This was one for data")
    res.send(data)
})

app.post('/api/data', (req,res)=>{
    const newEntry= req.body
    console.log(newEntry)
    data.push(newEntry.name)
    res.sendStatus(201)
})


app.delete('/api/data', (req,res)=>{
    data.pop()
    console.log('we deleted the element off the end of the arrray')
    res.sendStatus(203)

})

app.listen( PORT, ()=>{console.log(`Server started on:${PORT}`)})