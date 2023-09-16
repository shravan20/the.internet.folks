const service = require("./community.service");
const Validator = require('validatorjs');
const { BadRequestError } = require("../../models/error");
async function createCommunity(request, response, next) {
    try {
        let rules = {
            name: 'required|string|max:128|min:2',
            slug: 'required|string|max:255|min:2',
            owner: 'required|string'
        };

        let validation = new Validator(request.body, rules);
        if (validation.fails()) {
            throw new BadRequestError(Object.values(validation.errors.all()).flatMap(i => i));
        }

        response.success(await service.createCommunity(request.body));
    } catch (error) {
        response.error(error)
    }

}

async function getAllCommunity(request, response, next) {
    try {
        response.success(await service.getAllCommunity(request.uid, request.query));
    } catch (error) {
        response.error(error);
    }
}

async function getAllMembersByCommunity(request, response, next) {
    try {
        response.success(await service.getAllMembersByCommunity());
    } catch (error) {
        response.error(error);
    }
}

async function getMyOwnedCommunity(request, response, next) {

}

async function getMyJoinedCommunity(request, response, next) {

}

module.exports = {
    createCommunity, getAllCommunity, getAllMembersByCommunity, getMyOwnedCommunity, getMyJoinedCommunity
}