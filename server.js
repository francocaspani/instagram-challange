require('dotenv').config()
require('./config/database')
const path = require('path')
const express = require('express')
const Router = require('./routes/routes')
const fileUpload = require('express-fileupload')
const cors = require('cors')

const app = express()
const PORT = 4000

app.use(cors())
app.use(fileUpload())
app.use(express.json())
app.use('/api', Router)
app.use(express.static(path.join(__dirname,'image')))
app.set('port', PORT)

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname+'image/index.html'))
})

app.listen(PORT, ()=>{
    console.log('Servidor corriendo en puerto' + PORT)
})