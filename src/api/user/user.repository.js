const User = require("./user.model");


async function createUser(userData) {
    try {
        const user = new User(userData);
        const savedUser = await user.save();
        let data = {
            name: savedUser.name,
            email: savedUser.email,
            id: savedUser.id,
        }
        return data;
    } catch (error) {
        throw error;
    }
}

async function findById(id, view = {}) {
    try {
        const user = await User.findById(id, view);
        return user;
    } catch (error) {
        throw error;
    }
}

async function findOne(filter = {}, view = {}) {
    try {
        const user = await User.findOne(filter, view);
        return user;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createUser, findById, findOne
}