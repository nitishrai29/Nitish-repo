//Login file 
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Please fill the tha data" });
        }
        const logUser = await Student.findOne({ email: email });
        if (logUser) {                                   
            
            const isMatch = await bcrypt.compare(password, logUser.password);   
            const token = await logUser.generateAuthToken()                        
            console.log("My Token is : ",token);
            res.cookie("jwToken", token, {
                expires: new Date(Date.now() +25892000000),
                httpOnly : true
            })

            if (isMatch) {         
                
                res.status(202).json({ message: "Login Suceesfull", logUser });
                
                const mysalt= getSalt(hash);
                console.warn("salt is ",mysalt)
                
                
                console.warn("Login Successful and token is:", token);
            } else {
                res.send({ message: "Invalid Credentials " })
                console.warn("Invalid Credential");
            }

        } else {

            res.send({ message: "User not Found" })
        } 
    } catch (err) {
            console.log(err);
    }
})