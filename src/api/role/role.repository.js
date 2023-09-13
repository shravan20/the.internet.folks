const Role = require('./role.model');

async function createRole(data) {
  try {
    const role = new Role(data);
    const savedRole = await role.save();
    return savedRole;
  } catch (error) {
    throw error;
  }
}

async function getAllRoles() {
  try {
    const roles = await Role.paginate();
    return roles;
  } catch (error) {
    throw error;
  }
}

async function getRoleById(id) {
  try {
    return await Role.findById(id);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createRole,
  getAllRoles,
  getRoleById
};
