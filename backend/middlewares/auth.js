const User = require('../models/user');

const user = require("../models/user");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");

// Checks if user is authenticated or not
exports.isAuthenticatedUser = catchAsyncErrors (async (req, res, next) => {
    
    const { token } = req.cookies // obtine the token from cookie and verify

    // console.log(token);

    // Verify if user is authenticated or not
    if(!token) {
        return next(new ErrorHandler('Login first to access this resource.', 401))
    }

    // Ckecks the token is corect or not
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = await user.findById(decoded.id);

    next()
})

// Handling users roles
exports.authorizeRoles = (...roles) => { // just role authorized can access the functionality
    return (req, res, next) => {
        if(!roles.includes(req.user.role)) {
            return next(
                new ErrorHandler(`Role (${req.user.role}) is not allowed to access this resource`, 403))
        }

        next()
    }
}
