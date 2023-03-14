const express = require('express')
const {route} = require('./routes/locations')
const fileUpload = require('express-fileupload')
const PORT = process.env.PORT || 3001
const dir = __dirname.slice(0, __dirname.length-5)
let uploadPath = `${dir}/images/nombreImage`

console.log(dir.slice(0,dir.length-5))
console.log(uploadPath)
// console.log(__filename)


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