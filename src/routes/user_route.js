const express = require('express')
const auth = require("../middleware/auth")
const router = new express.Router()
const {createUser,Login,deleteUser,getUser,createHospital,getHospital,createPost,getUserPosts,
    getHospitalPosts,
    getAllPosts,getMyPosts} = require("../controller/userController")


//login
router.post('/api/login',Login) 
router.post('/api/user',createUser)
router.post('/api/hospital',createHospital)
router.post('/api/post',auth,createPost)

//delete user by admin
// router.g('/api/user/',auth,deleteUser)

//view profile by user
router.get('/api/user',auth,getUser)
router.get('/api/hospital',auth,getHospital)
router.get('/api/getUserPosts',auth,getUserPosts)
router.get('/api/getHospitalPosts',auth,getHospitalPosts)
router.get('/api/getAllPosts',auth,getAllPosts)
router.get('/api/getMyPosts',auth,getMyPosts)


module.exports = router;