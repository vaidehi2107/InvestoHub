const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
    userId: mongoose.Schema.Types.ObjectId,
    stockId: mongoose.Schema.Types.ObjectId,
    quantity: Number,
    avgPrice: Number
});

module.exports = mongoose.model("Portfolio", portfolioSchema);
