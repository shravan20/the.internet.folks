const User = require("./user.model");


async function createUser(userData) {
    try {
        const user = new User(userData);
        const savedUser = await user.save();
        let data = {
            id: savedUser.id,
            name: savedUser.name,
            email: savedUser.email,
            created_at: user.createdAt
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