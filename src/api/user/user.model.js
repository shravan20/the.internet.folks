const mongoose = require("mongoose");
const snowflake = require("@theinternetfolks/snowflake");
const mongoosePaginate = require("mongoose-paginate-v2");

const userSchema = new mongoose.Schema({
  _id: { type: String, unique: true, default: snowflake.Snowflake.generate, },
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String, select: false }
}, {
  timestamps: true
});


userSchema.plugin(mongoosePaginate);

const User = mongoose.model("User", userSchema);

module.exports = User;