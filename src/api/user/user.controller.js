const service = require('./user.service');
let Validator = require('validatorjs');
const { BadRequestError } = require("../../models/error");
async function signup(request, response, next) {
    try {
        let rules = {
            "name": "required|min:2",
            "email": "required|email",
            "password": "required|min:6|alpha_num"
        }

        let validation = new Validator(request.body, rules);
        if (validation.fails()) {
            throw new BadRequestError(validation.errors.all());
        }

        response.success(validation.errors.all());
    } catch (error) {
        response.error(error);
    }
}

async function signin(request, response, next) {
    try {
        return response.success(await service.signin());
    } catch (error) {
        response.error(error);
    }
}

module.exports = {
    signin,
    signup,
};
