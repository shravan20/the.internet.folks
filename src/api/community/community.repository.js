const Community = require("./community.model");
const { NotFoundError } = require("../../models/error");

async function createCommunity(data) {
    try {
        const community = new Community(data);
        return await community.save();
    } catch (error) {
        throw error;
    }
}

async function getCommunityById(id, validate = false) {
    try {
        let community = await Community.findById(id);
        if (!community && validate) {
            throw new NotFoundError(`Community doesnt exist with ${id}`);
        }
        return community;
    } catch (error) {
        throw error;
    }
}

async function findOne(filter, view) {
    try {
        return await Community.findOne(filter, view);
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
