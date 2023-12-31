const express = require('express')
const router = express.Router()
const { Get, Insert } = require('../controller/user.controller')
const { CheckPostReq } = require('../middleware/middleware')

router.get('/', Get)
// router.get('/:id', GetByPK)
router.post('/', CheckPostReq, Insert)
// router.put('/:id', Update)
// router.delete('/:id', Delete)


module.exports = router