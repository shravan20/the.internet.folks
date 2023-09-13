const repository = require("./community.repository");
const userService = require("../user/user.service");
const { BadRequestError } = require("../../models/error");

async function createCommunity(data) {
    try {
        let creator = data["owner"];
        creator = userService.getUserById(creator);

        let community = await repository.findOne({ slug: data['slug'] });

        if (community) {
            throw new BadRequestError("Please Provide a Unique Community Slug");
        }
        community = repository.createCommunity(data);
        data.id = community._id;
        data.createdAt = community.createdAt;
        return data;

    } catch (error) {
        throw error;
    }
}

async function getAllCommunity(data) {

}

async function getAllMembersByCommunity(data) {

}

async function getMyOwnedCommunity(data) {

}

async function getMyJoinedCommunity(data) {

}

module.exports = {
    createCommunity,
    getAllCommunity,
    getAllMembersByCommunity,
    getMyOwnedCommunity,
    getMyJoinedCommunity
}