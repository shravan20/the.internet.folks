const service = require("./member.service");
const Validator = require('validatorjs');
const { BadRequestError } = require("../../models/error");

async function createMember(request, response, next) {
    try {
        let rules = {
            "community": "required|string",
            "user": "required|string",
            "role": "required|string"
        }

        let validation = new Validator(request.body, rules);
        if (validation.fails()) {
            throw new BadRequestError(Object.values(validation.errors.all()).flatMap(i => i));
        }
        console.log(request.uid);
        await service.createMember(request.body, request.uid);
        response.success(request.body);
    } catch (error) {
        response.error(error);
    }
}


async function deleteMember(request, response, next) {
    try {
        let rules = {
            "community": "required|string",
            "user": "required|string",
            "role": "required|string"
        }

        let validation = new Validator(request.body, rules);
        if (validation.fails()) {
            throw new BadRequestError(Object.values(validation.errors.all()).flatMap(i => i));
        }
        await service.deleteMember(request.body, request.uid);
        response.success(request.body);
    } catch (error) {
        response.error(error);
    }
}


module.exports = {
    createMember,
    deleteMember
}