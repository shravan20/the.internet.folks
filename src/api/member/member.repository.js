const Member = require('./member.model');

async function createMember(memberData) {
    try {
        const member = new Member(memberData);
        return await member.save();
    } catch (error) {
        throw error;
    }
}

async function deleteMemberById(memberId) {
    try {
        return await Member.findByIdAndRemove(memberId);
    } catch (error) {
        throw error;
    }
}

async function findMemberById(memberId) {
    try {
        return await Member.findById(memberId);
    } catch (error) {
        throw error;
    }
}

async function findMembers(query, view) {
    try {
        return await Member.find(query, view);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createMember, deleteMemberById, findMemberById, findMembers
};
