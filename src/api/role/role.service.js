const repository = require('./role.repository');

async function createRole(data) {
  try {
    return await repository.createRole(data);
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
};
