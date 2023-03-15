const User = require("../models/user")
const Login = async (req, res, next) => {
    const { email, password } = req.body
    try {
        const userFound = await User.findOne({ email });
        if (!userFound)
            throw new Error("Email not found", {
                cause: { status: 400 }
            })
        else {
            const verify = await userFound.matchPassword(password)
            if (!verify) {
                throw new Error("Passsword not match", {
                    cause: { status: 400 }
                })
            }
            userFound.generateAuthToken()
            res.status(400).json({
                success: true
            })
        }
    } catch (error) {
        next(error)

    }
}

const createUser = async (req, res, next) => {
    const { email, password, name, role,dob,age } = req.body
    try {
        if (!name || !email || !password || !role || !dob || !age) {
            throw new Error("All the fields should be valid", {
                cause: { status: 400 }
            })
        }
        if (password.trim().length < 8 || password.trim().length > 20) {
            throw new Error("Password must be 8 to 20 characters long", {
                cause: { status: 400 }
            })
        }
        const userFound = await User.findOne({ email: email });
        if (userFound)
            throw new Error("Email already exists", {
                cause: { status: 400 }
            })
        const user = await new User(req.body)
        if (!await user.save()) {
            throw new Error("User not created")
        }
        res.status(200).json({
            success: true,
            data: user
        })

    } catch (error) {
        next(error)
    }
        
}

const updateUser = async (req, res, next) => {

        
}

const deleteUser = async (req, res,next) => {
    const _id = req.params.id;
    try {
        const deleteUserData = await user.findByIdAndDelete(_id);
        if (!deleteUserData) {
            throw new Error("Data not deleted ", {
                cause: { status: 400 }
            });
        } else {
            res.status(201).json({ success: true });
        }

    } catch (error) {
        next(error)
    }
}

const getUser = async(req,res,next) =>{
    const _id = req.user._id 
    try {
        const userData = await user.findById(_id)
        if(!userData)
        {throw new Error("Data not deleted ", {
            cause: { status: 400 }
        })}else{
            res.status(201).send(userData );
        }
    } catch (error) {
        next(error)
    }
}

module.exports = { createUser, Login, updateUser, deleteUser,getUser }