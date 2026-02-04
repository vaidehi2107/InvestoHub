const express = require("express");
const router = express.Router();

router.get("/trade/:symbol", (req,res) => {
    //stock symbol list
});
router.post("/trade/buy",(req,res)=> {
//buy order
});

router.post("/trade/sell", (req,res)=> {
//sell order
});

module.exports = router;