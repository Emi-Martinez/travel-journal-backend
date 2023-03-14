const express = require('express')
const {route} = require('./routes/locations')
const fileUpload = require('express-fileupload')
const PORT = process.env.PORT || 3001

console.log(__dirname)


const app = express()

//Sirviendo carpeta con imagenes
app.use(express.static('./images'));

//Middleware
app.use(fileUpload())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/', route)

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}...`)
})