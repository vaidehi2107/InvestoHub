const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    walletBalance: {
        type: Number,
        default: 100000
    }
});

module.exports = mongoose.model("User",userSchema);