const jwt = ('jsonwebtoken')
const User = ('../models/userModel')
const asyncHandler = require('express-async-handler')


const protect = asyncHandler(async (req, res, next) => {
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        console.log('token found')
        try {
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            console.log(decoded)
            req.user = await User.findById(decoded.id).select('-password')

            next()

        } catch (error) {
            console.error(error)
            res.status(401)
            throw new Error('Not authorized , token faild')
        }
    }

    if (!token) {
        res.status(401)
        throw new Error('Not authorized , no token')
    }

    next()
})

module.exports = { protect }