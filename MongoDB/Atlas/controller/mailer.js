var nodemailer= require('nodemailer')

const mailer=async (req,res)=>{
    
    
    const transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    requireTLS:true,
    auth:{
        user:"nitish.vibgyorweb@gmail.com",
        pass:"nitisrai1"
    }
})


const mailOptions={
    from:"nitish.vibgyorweb@gmail.com",
    to: "maacnitishrai@gmail.com",
    subject:'demo mail',
    text:"Hello from the server" 
}

transporter.sendMail(mailOptions, function(err,info){
    if(err){
        console.log(err)
    }
    else{
        console.log('email has been sent', info.response)
    }
})

}

module.exports={mailer}