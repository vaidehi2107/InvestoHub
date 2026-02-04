const express = require("express");
const router = express.Router();
const Stock = require("../models/stock");
const User = require("../models/user");

router.get("/market",async (req,res)=> {
 //list of stocks
    const stocks = await Stock.find({});
    const currentUser = await User.findOne(); // demo user
    res.render("sim/market_sim", {stocks, currentUser});
});

module.exports = router;