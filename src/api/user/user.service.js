const repository = require('./user.repository');
const bcrypt = require('bcrypt');

async function signin(data) {
    try {
        return await repository.createUser(data);
    } catch (error) {
        throw error;
    }
}

async function signup(data) {
    try {
        return await repository.createUser(data);
    } catch (error) {
        throw error;
    }
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

module.exports = {
    signin,
    signup,
};
