const express = require('express')

const authenticate = require('./Authentication')

const auth=(authenticate, async(req,res)=>{
    console.log("On Login")
    await res.send(req.user)
})

module.exports= {auth}