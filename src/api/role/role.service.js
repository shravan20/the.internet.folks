const repository = require('./role.repository');
const { BadRequestError } = require("../../models/error");
async function createRole(data) {
  try {
    return await repository.createRole(data);
  } catch (error) {
    throw error;
  }
}

async function getRoleById(id) {
  try {
    let role = await repository.getRoleById(id);
    if (!role) {
      throw new BadRequestError("User not found.");
    }
    return role;
  } catch (error) {
    throw error;
  }
}


async function getAllRoles() {
  try {
    return await repository.getAllRoles();
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createRole,
  getAllRoles,
  getRoleById
};
