const user = require('../../Models/Student')
const mongoose = require('mongoose');

const addStu = async (req, res) => {
    


    try {
        const password = req.body.password;
        const cnfrmPassword = req.body.cnfrmPassword;


        if (password === cnfrmPassword) {
            const data = new user({
                // _id: new mongoose.Types.ObjectId(),
                name: req.body.name,
                lastName: req.body.lastName,
                email: req.body.email,
                gender: req.body.gender,
                standard: req.body.standard,
                mobile: req.body.mobile,
                password:password,
                cnfrmPassword:cnfrmPassword
                
            })
             console.log("the sucess part:" + data)

            const token = await  data.generateAuthToken();
            console.log("the token part is:" + token )

           
            data.save().then((result) => {
                res.status(201).json(result);
                console.warn("data added successfully in api is:" + data)
            })


        }
        else {
            res.send("password mis-match")
        }

    }
    catch (error) {
        res.status(400).send(error);
    }


}

module.exports={addStu}