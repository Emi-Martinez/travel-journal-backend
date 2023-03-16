const express = require('express')
const cors = require('cors')
const {route} = require('./routes/locations')
const fileUpload = require('express-fileupload')
const PORT = process.env.PORT || 3001

const app = express()
const corsOptions = {
    origin: process.env.AUTHORIZED_DOMAIN,
    credentials :  true
}

app.use(cors(corsOptions))

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