const Community = require("./community.model");


async function createCommunity(data) {
    try {
        const community = new Community(data);
        return await community.save();
    } catch (error) {
        throw error;
    }
}

async function getCommunityById(id) {
    try {
        return await Community.findById(id);
    } catch (error) {
        throw error;
    }
}

async function findOne(view, filter) {
    try {
        return await Community.findOne(view, filter);
    } catch (error) {
        throw error;
    }
}

async function getCommunities(filter, view, page, limit) {
    try {
        return await Community.paginate(filter, view, { page, limit });
    } catch (error) {
        throw error;
    }
}

async function updateCommunity(id, data) {
    try {
        return await Community.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
        throw error;
    }
}

async function deleteCommunity(id) {
    try {
        return await Community.findByIdAndRemove(id);
    } catch (error) {
        throw error;
    }
}


module.exports = {
    createCommunity, findOne, getCommunities, updateCommunity, deleteCommunity, getCommunityById
};
