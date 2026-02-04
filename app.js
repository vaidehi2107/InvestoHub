const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));
const learnRoutes = require("./routes/learn");
const marketRouter = require("./routes/market");
const tradeRouter = require("./routes/trade");
const ipoRouter = require("./routes/ipo");
const dashboardRouter = require("./routes/dashboard");
const orderRouter = require("./routes/orders");

mongoose.connect("mongodb://127.0.0.1:27017/marketSim")
.then(() => console.log("DB connected"))
.catch((err => console.log(err)));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"public")));


app.use("/learn",learnRoutes);
// router.use("/")
app.use("/sim", marketRouter);
app.use("/sim", tradeRouter);
app.use("/sim", ipoRouter);
app.use("/sim", dashboardRouter);
app.use("/sim", orderRouter);

app.get("/", (req,res) => {
    res.render("home.ejs");
})


app.listen(3000, () => {
    console.log("listening on port 3000...");
});