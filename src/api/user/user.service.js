const { BadRequestError } = require("../../models/error");
const repository = require("./user.repository");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Current time + 1hr
let addedTimestamp = Math.floor(Date.now() / 1000) + (60 * 60 * 600);

async function signin(data) {
    try {
        let user = await repository.findOne({ email: data.email }, { password: 0 });
        if (!user) {
            throw new BadRequestError("The credentials you provided are invalid.")
        }

        let response = {
            id: user._id,
            name: user.name,
            email: user.email,
            created_at: user.createdAt
        }

        return {
            data: response,
            meta: {
                "access_token": jwtGenerator(user.id)
            }
        }
    } catch (error) {
        throw error;
    }
}

async function signup(data) {
    try {

        let user = await repository.findOne({ email: data.email }, { password: 0 });

        if (user) {
            throw new BadRequestError("User with this email address already exists.");
        }
        data.password = await hashPassword(data.password)
        let newUser = await repository.createUser(data);

        return {
            data: newUser,
            meta: {
                "access_token": jwtGenerator(newUser.id)
            }
        }
    } catch (error) {
        throw error;
    }
}

async function getUser(id) {
    let user = await repository.findOne({ _id: id }, { password: 0 });

    let response = {
        id: user._id,
        name: user.name,
        email: user.email,
        created_at: user.createdAt
    }
    return response;
}

async function getUserById(id) {
    let user = await repository.findOne({ _id: id }, { password: 0 });
    if (!user) {
        throw new BadRequestError("User not found.");
    }
    return user;
}

async function hashPassword(plainTextPassword) {
    try {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(plainTextPassword, saltRounds);
        return hashedPassword;
    } catch (error) {
        throw error;
    }
}

/**
 * TODO: Move these to middlewares
 */

function jwtGenerator(payload) {
    return jwt.sign({
        data: payload, exp: addedTimestamp,
    }, process.env.JWT_SECRET);
}

module.exports = {
    signin,
    signup,
    getUser,
    getUserById
};
