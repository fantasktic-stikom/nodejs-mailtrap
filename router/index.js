const router = require('express').Router()
const EmailController = require('../controllers/email.controller')

router.get('/email', EmailController.email)

module.exports = router