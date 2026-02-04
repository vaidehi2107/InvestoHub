const mongoose = require("mongoose");

const ipoSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true
  },

  symbol: {
    type: String,
    required: true,
    unique: true
  },

  priceBand: {
    lower: Number,
    upper: Number
  },

  lotSize: {
    type: Number,
    required: true
  },

  issueSize: {
    type: Number, // total shares
    required: true
  },

  openDate: Date,
  closeDate: Date,

  categoryLimits: {
    retail: Number,
    hni: Number,
    qib: Number
  },

  gmp: {
    type: Number, // grey market premium
    default: 0
  },

  status: {
    type: String,
    enum: ["upcoming", "open", "closed", "listed"],
    default: "upcoming"
  }
}, { timestamps: true });

module.exports = mongoose.model("IPO", ipoSchema);
