const repository = require("./community.repository");
const userService = require("../user/user.service");
const { BadRequestError, NotFoundError } = require("../../models/error");
const memberService = require("../member/member.service");
const roleRepository = require("../role/role.repository");

async function createCommunity(data) {
    try {
        let creator = data["owner"];
        creator = await userService.getUserById(creator);

        let community = await repository.findOne({ slug: data['slug'] });

        if (community) {
            throw new BadRequestError("Please Provide a Unique Community Slug");
        }

        community = await repository.createCommunity(data);
        data.id = community._id;
        data.createdAt = community.createdAt;

        let searchString = "admin";
        let role = await roleRepository.findOne({
            name: { $regex: new RegExp(`\\b${searchString}\\b`, 'i') }
        });

        if (!role) {
            throw new NotFoundError("Add a Community Admin & Member role in role entity");
        }

        await memberService.createMember({
            user: creator._id,
            community: community._id,
            role: role._id
        }, creator, false);

        return data;

    } catch (error) {
        throw error;
    }
}

async function getCommunityById(id) {
    try {
        let community = repository.getCommunityById(id);
        if (!community) {
            throw new NotFoundError(`Community doesnt exist with ${id}`);
        }
        return community;
    } catch (error) {
        throw error;
    }
}

async function getAllCommunity(uid, query) {

    let pageNo = query.page || 1;
    let size = query.size || 10;
    let filter = { owner: uid };

    let communities = await repository.getCommunities(filter, {}, pageNo, size);

    let data = await Promise.all(communities.docs.map(async info => {
        let user = await userService.getUserById(info.owner)
        return {
            "id": info._id,
            "name": info.name,
            "slug": info.slug,
            "owner": {
                id: info.owner,
                name: user.name
            },
            "createdAt": info.createdAt,
        }
    }));

    return {
        "meta": {
            "total": communities.totalDocs,
            "pages": communities.totalPages,
            "page": communities.page,
        },
        "data": data
    }


}

async function getAllMembersByCommunity(communityId, userId, page, size) {
    try {
        let community = await repository.findOne({ _id: communityId });

        if (!community) {
            throw new BadRequestError("Community not found");
        }

        let members = memberService.getAllMembersByCommunity(communityId, page, size);
        return members;
    } catch (error) {
        throw error;
    }
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
    getMyJoinedCommunity,
    getCommunityById
}