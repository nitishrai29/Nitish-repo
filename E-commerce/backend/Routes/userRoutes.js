const express = require('express')
const router = express.Router()

const add= require('../controller/user/userAdd')
router.post('/register', add.addUser)