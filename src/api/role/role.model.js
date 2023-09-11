const mongoose = require('mongoose');
const snowflake = require("@theinternetfolks/snowflake");
const mongoosePaginate = require('mongoose-paginate-v2');

const roleSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: snowflake.Snowflake.generate,
    unique: true,
  },
  name: {
    type: String,
    unique: true,
    required: true,
  }
}, {
  timestamp: true
});

roleSchema.plugin(mongoosePaginate);

const Role = mongoose.model("Role", roleSchema);

module.exports = Role;