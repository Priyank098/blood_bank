const express = require('express')
const auth = require("../middleware/auth")
const router = new express.Router()
const {createUser,Login,updateUser,deleteUser,getUser} = require("../controller/userController")
const url = "/api"

//login
router.post('/api/login',Login) 

//create user by admin
router.post('/api/user',createUser)

//update user by admin
router.patch('/api/user/update/:id',auth,updateUser)

//delete user by admin
router.delete('/api/user/delete/:id',auth,deleteUser)

//view profile by user
router.get('/api/user/get',auth,getUser)


module.exports = router;