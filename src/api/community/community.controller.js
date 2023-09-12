const service = require("./community.service");
const Validator = require('validatorjs');

async function createCommunity(request, response, next) {
    try {
        let rules = {
            id: 'required|string',
            name: 'required|string|max:128|min:2',
            slug: 'required|string|max:255|min:2',
            owner: 'required|string'
        };

        let validation = new Validator(request.body, rules);
        if (validation.fails()) {
            throw new BadRequestError(validation.errors.all());
        }

        response.success({ "test": "test" });
    } catch (error) {
        response.error(error)
    }

}

async function getAllCommunity(request, response, next) {

}

async function getAllMembersByCommunity(request, response, next) {

}

async function getMyOwnedCommunity(request, response, next) {

}

async function getMyJoinedCommunity(request, response, next) {

}