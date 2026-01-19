const express = require("express");
const router = express.Router();

router.get("/budget",(req,res) => {
    res.render("learn/budget");
});

router.get("/fds",(req,res) => {
    res.render("learn/fds");
});

router.get("/mfs",(req,res) => {
    res.render("learn/mfs");
});

router.get("/markets",(req,res) => {
    res.render("learn/markets");
});

router.get("/technical", (req,res) => {
    res.render("learn/technical");
}); 

router.get("/fundamental", (req,res) => {
    res.render("learn/fundamental");
}); 
router.get("/ipo", (req,res) => {
    res.render("learn/ipo");
});

module.exports = router;