const data = require('../Models/users')


const gtThan =(req,res)=>{
    data.find({age:{$gt : 18}}).then((user)=>{
        res.json(user)
    }).catch((err)=>{
        console.log(err)
    })
}

const ltThan =(req,res)=>{
    data.find({age:{$lt : 18}}).then((user)=>{
        res.json(user)
    }).catch((err)=>{
        console.log(err)
    })
}

const eqThan =(req,res)=>{
    data.find({age:{$eq : 18}}).then((user)=>{
        res.json(user)
    }).catch((err)=>{
        console.log(err)
    })
}

const neThan =(req,res)=>{
    data.find({age:{$ne : 18}}).then((user)=>{
        res.json(user)
    }).catch((err)=>{
        console.log(err)
    })
}

const andOp =(req,res)=>{
    data.find({$and : [{age:{$eq:22}}, {location:{$eq:"Nagpur"}}]})
    .then((user)=>{
        res.json(user)
    }).catch((err)=>{
        console.log(err)
    })
}

const notOp =(req,res)=>{
    data.find({location:{$not:{$eq:"Nagpur"}}})
    .then((user)=>{
        res.json(user)
    }).catch((err)=>{
        console.log(err)
    })
}

const regex=(req,res)=>{
    data.find({name:{$regex:"^a.*", $options:'i'}})
    .then((user)=>{
        res.json(user)
    })
    .catch((err)=>{
        console.log(err)
    })
}

const user_less = (req, res) => {
    data.find( {age: { $lte:"18"} })
    .then((result) => {
        res.status(201).json(result);
    })
    .catch((error) => console.warn(error)
    )
}


// const eleMatch=(req,res)=>{
//     data.find({age:{$eleMatch:{age:{$gt:20}}},location:1})
//     .then((user)=>{
//         res.json(user)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// }




module.exports= {gtThan, 
    ltThan,
    eqThan,
    neThan,
    andOp,
    notOp,
    regex,
    user_less
    // eleMatch
}