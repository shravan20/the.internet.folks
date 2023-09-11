const User = require("./user.model");


async function createUser(userData) {
    try {
        const user = new User(userData);
        const savedUser = await user.save();
        return savedUser;
    } catch (error) {
        throw error;
    }
}

async function findUserById(id) {
    try {
        const user = await User.findById(id);
        return user;
    } catch (error) {
        throw error;
    }
}

async function findUserByEmail(email) {
    try {
        const user = await User.findOne({ email });
        return user;
    } catch (error) {
        throw error;
    }
}