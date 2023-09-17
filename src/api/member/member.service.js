const repository = require("./member.repository");
const userService = require("../user/user.service");
const communityService = require("../community/community.service");
const roleService = require("../role/role.service");
const { BadRequestError } = require("../../models/error");
const communityRepository = require("../community/community.repository");

async function createMember(data, uid, validateAdminAccess=true) {
    try {
        let user = await userService.getUserById(data.user);
        let community = await communityRepository.getCommunityById(data.community, true);
        let role = await roleService.getRoleById(data.role);

        let creator = await userService.getUserById(uid);
        let creatorMember = await repository.findOne({
            community: community._id,
            user: uid
        });

        if (validateAdminAccess) {
            let creatorRole = await roleService.getRoleById(creatorMember._id);

            if (!creatorRole) {
                throw new BadRequestError("Cannot add to community");
            }

            let regex = /\badmin\b/i;

            if (!regex.test(creatorRole.name)) {
                throw new BadRequestError("You cannot add the member to this community due to lack of permission");
            }
        }

        let member = await repository.createMember(data);
        data.createdAt = member.createdAt;
        return data;

    } catch (error) {
        throw error;
    }
}


async function deleteMember(data, uid) {
    try {
        let user = userService.getUserById(data.user);
        let community = communityService.getCommunityById(data.community);
        let role = roleService.getRoleById(data.role);

        if (uid != community.owner) {
            throw new BadRequestError("You cannot delete the member to this community due to lack of permission");
        }

        await repository.deleteMember({
            community: data.community, user: data.user, role: data.role
        });

        return data;
    } catch (error) {
        throw error;
    }
}

async function getAllMembersByCommunity(id, page, size) {
    try {
        return await repository.findAll({
            community: id
        }, {}, page, size);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createMember,
    deleteMember,
    getAllMembersByCommunity
}