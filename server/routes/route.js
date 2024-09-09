const express = require('express')
const {register} = require('../controllers/register.js')
const checkEmail = require('../controllers/checkEmail.js')
const checkPassword = require('../controllers/checkPassword.js')
const userDetails = require('../controllers/userDetails.js')
const logout = require('../controllers/logout.js')
const updateUserDetails = require('../controllers/updateUserDetails.js')
const router = express.Router()


router.post('/register',register)
router.post('/email',checkEmail)
router.post('/password',checkPassword)
router.get('/user-details',userDetails)
router.get('/logout',logout)
router.post('/update-user',updateUserDetails)
 

module.exports = router