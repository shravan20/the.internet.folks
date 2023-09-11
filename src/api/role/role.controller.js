const service = require('./role.service'); 

async function createRole(request, response, next) {
  try {
    
    response.success(await service.createRole(request.body));
  } catch (error) {
    response.error(error);
  }
}

async function getAllRoles(request, response, next) {
  try {
    return response.success(await service.getAllRoles());
  } catch (error) {
    response.error(error);
  }
}

module.exports = {
  createRole,
  getAllRoles,
};
