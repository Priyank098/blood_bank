const jwt = require('jsonwebtoken')
const User = require('../models/user')
const Hospital = require("../models/hospital")

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, 'secrent_key_1234')
        const user = await User.findOne({ _id: decoded._id, token: token })
        const hospital = await Hospital.findOne({ _id: decoded._id, token: token })
        if (!user && !hospital)
            throw new Error("please authenticate", {
                cause: { status: 400 }
            })
        if (user) {
            req.user = user
            next()
        } else if (hospital) {
            req.user = hospital
            next()
        }

    } catch (error) {
        next(error)
    }
}


module.exports = auth