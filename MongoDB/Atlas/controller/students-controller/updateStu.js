const data = require('../../Models/Student')


//  const updateUser = async (request, response) => {
//     let user = await data.findById(request.params.id);
//     user = request.body;

//     const editUser = new data(user);
//     try{
//         await data.updateOne({_id: request.params.id}, editUser);
//         response.status(201).json(editUser);
//     } catch (error){
//         response.status(409).json({ message: error.message});     
//     }
// }

const updateUser = (req, res) => {
    data.updateOne(
        { _id : req.params.id },
        { $set:
            {
             name: req.body.name, 
             lastName: req.body.lastName, 
             email : req.body.email,
             gender: req.body.gender,
             standard:req.body.standard,
             mobile : req.body.mobile,
             password : req.body.password,
             cnfrmPassword : req.body.cnfrmPassword,
             
            }
        }
            ).then((result) => {
            res.status(201).json(result)
        })
        .catch((error) => console.warn(error)
        )
}

module.exports={updateUser}