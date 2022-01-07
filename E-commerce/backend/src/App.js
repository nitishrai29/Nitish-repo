const express =  require('express')
const app = express()
const userRoutes = require('../Routes/userRoutes')
const conn = require('../db/Conn')

conn.DbConn()

app.use(userRoutes)


app.listen(8000, ()=>{
    console.log('listening on Port 8000')
})