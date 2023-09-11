const jwt = require("jsonwebtoken");
const { UnauthorizedError } = require("../models/error");
const tokenVerification = (req, res, next) => {

    let bearerToken = req.authorization

    if (!bearerToken) {
        res.error(new UnauthorizedError("You need to sign in to proceed."));
    }

    let tokenParts = bearerToken.split(" ");

    if (tokenParts[0] != "Bearer" || tokenParts.length != 2) {
        res.error(new UnauthorizedError("You need to sign in to proceed."));
    }

    try {
        jwt.verify(tokenParts[2], process.env.JWT_SECRET)
    } catch (error) {
        res.error(new UnauthorizedError("You need to sign in to proceed."));
    }

    next();
}

module.exports = {
    tokenVerification
}