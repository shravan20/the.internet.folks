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
      throw new BadRequestError("Role not found.");
    }
    return role;
  } catch (error) {
    throw error;
  }
}


async function getAllRoles() {
  try {
    let roles = await repository.getAllRoles();

    let data = roles.docs.map(role => {
      return {
        "id": role._id,
        "name": role.name,
        "created_at": role.createdAt,
        "created_at": role.updatedAt
      };
    });

    return {
      "data": data,
      "meta": {
        "total": roles.totalDocs,
        "pages": roles.totalPages,
        "page": roles.page
      }
    }

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
