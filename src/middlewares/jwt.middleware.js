const jwt = require("jsonwebtoken");
const { UnauthorizedError } = require("../models/error");
const tokenVerification = (req, res, next) => {

    let bearerToken = req['headers']['authorization']

    if (!bearerToken) {
        res.error(new UnauthorizedError("You need to sign in to proceed."));
    }

    let tokenParts = bearerToken.split(" ");

    if (tokenParts[0] != "Bearer" || tokenParts.length != 2) {
        res.error(new UnauthorizedError("You need to sign in to proceed."));
    }

    try {
        let payload = jwt.verify(tokenParts[1], process.env.JWT_SECRET);
        req.uid = payload.data;
        next();
    } catch (error) {
        console.log(error)
        res.error(new UnauthorizedError("You need to sign in to proceed."));
    }
}

module.exports = {
    tokenVerification
}