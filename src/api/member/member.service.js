const repository = require("./member.repository");
const userService = require("../user/user.service");
const communityService = require("../community/community.service");
const roleService = require("../role/role.service");
const { BadRequestError } = require("../../models/error");

async function createMember(data, uid) {
    try {
        let user = userService.getUserById(data.user);
        let community = communityService.getCommunityById(data.community);
        let role = roleService.getRoleById(data.role);

        if (uid != community.owner) {
            throw new BadRequestError("You cannot add the member to this community due to lack of permission");
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


module.exports = {
    createMember,
    deleteMember
}