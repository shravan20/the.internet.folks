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
        // await service.createMember(request.body);
        response.success(request.body);
    } catch (error) {

    }
}


async function deleteMember(request, response, next) {

}


module.exports = {
    createMember,
    deleteMember
}