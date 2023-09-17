const { query } = require('express');
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

async function deleteMember(query) {
    try {
        return await Member.deleteOne(query);
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

async function findAll(query, view, page, size) {
    try {
        let options = {
            page: page || 1,
            limit: size || 10,
            select: view
        };
        return await Member.paginate(query, options);
    } catch (error) {
        throw error;
    }
}

async function findOne(query) {
    try {
        return await Member.findOne(query);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createMember, deleteMemberById, findMemberById, findMembers, deleteMember, findAll, findOne
};
