const express = require('express')
const router = express.Router()

const add = require('../controller/students-controller/addStu')
const get = require('../controller/students-controller/getStu')
const del = require('../controller/students-controller/delStu')
const update = require('../controller/students-controller/updateStu')
const getById= require('../controller/students-controller/getStuById')
const Login = require('../controller/students-controller/Login')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()


router.post('/add',jsonParser, add.addStu)
router.get('/get', get.getStu)
router.delete('/delete/:id', del.delStu )
router.put('/update/:id', jsonParser, update.updateUser)
router.post('/login', jsonParser, Login.login )

router.get('/get/:id', getById.getstuById)


module.exports = router



