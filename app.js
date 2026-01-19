const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));
const learnRoutes = require("./routes/learn");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"public")));

app.use("/learn",learnRoutes);

app.get("/", (req,res) => {
    res.render("home.ejs");
})


app.listen(3000, () => {
    console.log("listening on port 3000...");
})