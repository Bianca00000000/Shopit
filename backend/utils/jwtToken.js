// Create and send token and save in the cookie
const sendToken = (user, statusCode, res) => {

    // Create Jwt Token
    const token = user.getJwtToken();

    // Options for cookie
    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000 // cookie-ul expire for time of expire of COOKIE * 24 hours * 60 minutes * 60 seconds * 1000 miliseconds
        ),
        httpOnly: true // if i don't put this the cookie is not easy to pull it and is not easy that cookie can be accessed by using the JavaScript code
    }

    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        token,
        user

    })
}

module.exports = sendToken;