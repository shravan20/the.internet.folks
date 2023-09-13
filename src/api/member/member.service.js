const repository = require("./member.repository");
const userService = require("../user/user.service");
const communityService = require("../community/community.service");
const roleService = require("../role/role.service");

async function createMember(data) {
    try {
        let user = userService.getUserById(data.user);
        let community = communityService.getCommunityById(data.community);
        let role = roleService.getRoleById(data.role);

        // let member = await repository.createMember(data);
        // data.createdAt = member.createdAt;
        return data;

    } catch (error) {

    }
}


async function deleteMember(data) {

}


module.exports = {
    createMember,
    deleteMember
}