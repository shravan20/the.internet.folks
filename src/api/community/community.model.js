const mongoose = require("mongoose");
const snowflake = require("@theinternetfolks/snowflake");
const mongoosePaginate = require("mongoose-paginate-v2");

const communitySchema = new mongoose.Schema({
    _id: { type: String, unique: true, default: snowflake.Snowflake.generate, },
    name: { type: String, maxlength: 128, required: true },
    slug: { type: String, unique: true, maxlength: 255, required: true },
    owner: { type: String, ref: "User" },
}, { timestamps: true });

communitySchema.plugin(mongoosePaginate);

const Community = mongoose.model("Community", communitySchema);

module.exports = Community;