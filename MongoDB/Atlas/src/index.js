const express = require('express')
const app = express()
const route= require('../Routes/StudentRoute')
const cors = require('cors')
// const router= require('../Routes/userRoute')
const mongoose = require('mongoose')

// const newRoute= require('../controller/controller')

mongoose.connect("mongodb+srv://nitish:JCFFD6yz4pHmnoWS@cluster0.huzyk.mongodb.net/Studentdb?retryWrites=true",
{   useNewUrlParser: true, 
    useUnifiedTopology: true
});

app.use(route)
// app.use('/students',studentRoutes);
app.use(cors());
// app.get('/api/users', function(req,res){
//     data.find().then((user)=>{
//         res.json(user)
//     })
// } )


// app.post('/api/user', jsonParser, function(req,res){
//     const user = new data({
//         name: req.body.name,
//         company: req.body.company,
//         location: req.body.location
//     })

//     user.save().then((result)=>{
//         res.json(result)
//         console.log(result)
//     })
//     .catch((err)=>console.log(err))
// })

app.listen(8000, ()=>{
    console.log('listening on Port 8000')
})
// data.find({}, function(err,users){
//     if(err) {
//         console.log(err)
//     }
//     console.log(users)
// })