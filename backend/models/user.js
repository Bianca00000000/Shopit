const mongoose = require('mongoose');
const validator = require('validator');  // for validate the emails
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Please enter your name'],
        maxLength: [30, 'Your name cannot exceed 30 characters']
    },
    email: {
        type: String, 
        require: [true, 'Please enter your email'],
        unique: true, // must unique
        validate: [validator.isEmail, 'Please enter valid email address']
    },
    password: {
        type: String,
        required: [true, 'Please enter your password'],
        minlength: [6, 'Your password must be longer the 6 characters'],
        select: false // to exclude the "password" field from the results of the find() or findOne() query via Mongoose
    },
    avatar: { // the "image" of the user
        public_id: {
            type: String,
            required: true
        },
        url: { 
            type: String,
            required: true
        }
    },
    role: { // admin or user
        type: String,
        default: 'user'
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    resetPasswordToken: String, // if I forgot the password I sent the email at this token and I reset the token
    resetPasswordExpire: Date // and I reset the date of expire of token
})

// Ecrypting password before saving user
userSchema.pre('save', async function (next) {
    if(!this.isModified('password')) {
        next()
    }

    this.password = await bcrypt.hash(this.password, 10) // 10 is recomanded value for encryption
})

// Compare user password
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password) // compare the password encrypt from database with the password entered by the user in login
}

// Return JWT token
userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_TIME // when token expires
    }) // store the payload in the token => the id user and then specify the secret
} // we use the id of the user and secret and date of expire and create the token



// Generate password reset token
userSchema.methods.getResetPasswordToken = function () {
    // Generate token 
    const resetToken =  crypto.randomBytes(20).toString('hex');

    // Hash and set to resetPasswordToken => I'm going to take the user:resetPasswordToken property and initialize this variable, this was intended for resetting the token
    // also reset the expirre time with actual time
    this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex')

    // Set token expire time
    this.resetPasswordExpire = Date.now() + 30 * 60 * 1000 // 30 min * 60 sec * 1000 milsec

    return resetToken
}

module.exports = mongoose.model('User', userSchema);