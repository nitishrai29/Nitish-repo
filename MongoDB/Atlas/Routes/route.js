const express = require('express')
const router = express.Router()
const get= require('../controller/getUsers')
const add = require('../controller/addUser')
const del = require('../controller/delUser')
const update = require('../controller/updateUser')
const cmp = require('../controller/cmpOperator')
const one = require('../controller/getOne')

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()


router.get('/api/users',get.getUser)
router.get('/api/users/:id', one.getOne)

router.post('/api/user',jsonParser, add.addUser)

router.delete('/api/user/:id', del.delUser)

router.put('/api/user/:id', jsonParser, update.updateUser)

router.get('/gtThan', cmp.gtThan)

router.get('/ltThan', cmp.ltThan)

router.get('/eqThan', cmp.eqThan)

router.get('/neThan', cmp.neThan)

router.get('/and', cmp.andOp)

router.get('/not', cmp.notOp)

router.get('/regex', cmp.regex)

// router.get('/eleMatch', cmp.eleMatch)

router.get('/user_less', cmp.user_less)




module.exports = router