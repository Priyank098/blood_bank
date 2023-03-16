const express = require('express')
const auth = require("../middleware/auth")
const router = new express.Router()
const {createUser,Login,deleteUser,getUser,createHospital,getHospital} = require("../controller/userController")


//login
router.post('/api/login',Login) 
router.post('/api/user',createUser)
router.post('/api/hospital',createHospital)

//delete user by admin
// router.g('/api/user/',auth,deleteUser)

//view profile by user
router.get('/api/user',auth,getUser)
router.get('/api/hospital',auth,getHospital)


module.exports = router;