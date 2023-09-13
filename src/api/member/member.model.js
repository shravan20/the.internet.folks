const mongoose = require("mongoose");
const snowflake = require("@theinternetfolks/snowflake");
const mongoosePaginate = require("mongoose-paginate-v2");

const memberSchema = new mongoose.Schema({
    _id: {
        type: String,
        unique: true,
        default: snowflake.Snowflake.generate,
        required: true,
    },
    community: {
        type: String,
        ref: "Community",
        required: true,
    },
    user: {
        type: String,
        ref: "User",
        required: true,
    },
    role: {
        type: String,
        ref: "Role",
        required: true,
    }
}, {
    timestamps: true
});

memberSchema.plugin(mongoosePaginate);

const Member = mongoose.model("Member", memberSchema);

module.exports = Member;
