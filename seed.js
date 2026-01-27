const mongoose = require("mongoose");
const Stock = require("./models/Stock");
const User = require("./models/User");

mongoose.connect("mongodb://127.0.0.1:27017/marketSim");

async function seed() {
  await Stock.deleteMany({});
  await User.deleteMany({});

  await Stock.insertMany([
    { symbol: "TCS", name: "TCS", price: 3800 },
    { symbol: "INFY", name: "Infosys", price: 1600 },
    { symbol: "RELI", name: "Reliance", price: 2900 },
    { symbol: "HDFC", name: "HDFC Bank", price: 1500 },
    { symbol: "ITC", name: "ITC", price: 420 }
  ]);

  await User.create({ name: "Demo User" });

  console.log("Seeded DB");
  mongoose.connection.close();
}

seed();
